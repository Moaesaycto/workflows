const n=`# GLFX.js Image Component\r
\r
If you want to edit your images in a safe way that gives you a rendered image component \r
\r
\`\`\`tsx\r
import { useEffect, useRef, useMemo } from "react";\r
import { loadScript } from "@/lib";\r
\r
/**\r
 * All glfx.js effects that this component can apply.\r
 * Only the parameters you supply will be invoked – leave values \`undefined\` to skip an effect.\r
 * Coordinate‑based effects accept the raw numbers glfx.js expects.\r
 */\r
export type Effects = {\r
  bulgePinch?: [cx: number, cy: number, radius: number, strength: number];\r
  vignette?: [size: number, amount: number]; // 0…1, 0…1\r
  // colour / tone\r
  brightnessContrast?: [brightness: number, contrast: number]; // −1…+1, −1…+1\r
  hueSaturation?: [hue: number, sat: number]; // −1…+1, −1…+1\r
  sepia?: number; // 0…1\r
  curves?: [channel: "r" | "g" | "b" | "rgb", ...points: number[]];\r
  // noise / sharpness\r
  noise?: number; // 0…1\r
  denoise?: number; // 0…50\r
  unsharpMask?: [radius: number, strength: number]; // px, 0…5\r
  // stylise\r
  ink?: number; // 0…1\r
  triangleBlur?: number; // radius px\r
  // motion / zoom\r
  zoomBlur?: [cx: number, cy: number, strength: number] | [strength: number];\r
  swirl?: [cx: number, cy: number, radius: number, angle: number];\r
  // lens / depth\r
  lensBlur?: [radius: number, brightness: number, angle: number];\r
  tiltShift?: [x0: number, y0: number, x1: number, y1: number, blurRad: number, gradRad: number];\r
  // pixelation / halftone\r
  hexagonalPixelate?: [cx: number, cy: number, size: number];\r
  dotScreen?: [cx: number, cy: number, angle: number, size: number];\r
  colorHalftone?: [cx: number, cy: number, angle: number, size: number];\r
  // geometry\r
  perspective?: [[number, number][], [number, number][]]; // before, after quads\r
};\r
\r
type GlfxImageProps = {\r
  src: string;\r
  alt?: string;\r
  effects?: Effects;\r
};\r
\r
/**\r
 * <GlfxImage> – draws an image through glfx.js, with graceful degradation.\r
 *\r
 * ‣ Shows the raw <img> immediately.\r
 * ‣ Once WebGL & glfx.js are ready and the image is decoded, swaps in a GPU‑driven canvas.\r
 * ‣ Only runs the effects you actually pass in – nothing wasted.\r
 *\r
 * The component keeps itself tidy on unmount.\r
 */\r
export function GlfxImage({ src, alt = "Image", effects = {} }: GlfxImageProps) {\r
  // Always ensure bulge/vignette have safe defaults; everything else stays undefined unless supplied.\r
  const mergedEffects = useMemo<Required<Pick<Effects, "bulgeAmount" | "vignette">> & Effects>(\r
    () => ({\r
      bulgeAmount: effects.bulgeAmount ?? 0,\r
      vignette: effects.vignette ?? [0, 0],\r
      ...effects,\r
    }),\r
    [effects]\r
  );\r
\r
  const wrapperRef = useRef<HTMLDivElement>(null);\r
  const fallbackCanvasRef = useRef<HTMLCanvasElement>(null);\r
  const imgRef = useRef<HTMLImageElement>(null);\r
\r
  useEffect(() => {\r
    let rafId: number | undefined;\r
    let glCanvas: any; // fx.canvas instance\r
    let disposed = false;\r
\r
    const abort = () => {\r
      disposed = true;\r
      if (rafId) cancelAnimationFrame(rafId);\r
      glCanvas?.remove();\r
    };\r
\r
    const run = async () => {\r
      await loadScript("https://evanw.github.io/glfx.js/glfx.js");\r
      if (disposed) return;\r
\r
      const img = imgRef.current;\r
      const wrapper = wrapperRef.current;\r
      const fallback = fallbackCanvasRef.current;\r
      if (!img || !wrapper || !fallback) return;\r
\r
      // Ensure we have actual dimensions – wait for decode() where supported.\r
      if (!img.complete || img.naturalWidth === 0) {\r
        try {\r
          await img.decode();\r
        } catch {\r
          /* ignore – decode isn’t critical */\r
        }\r
      }\r
\r
      if (img.naturalWidth === 0 || img.naturalHeight === 0) {\r
        console.warn("glfx: image has no size – falling back to raw image");\r
        return; // leave <img> visible, nothing else to do\r
      }\r
\r
      const w = img.naturalWidth;\r
      const h = img.naturalHeight;\r
\r
      // Prepare fallback 2‑D canvas in case WebGL fails later\r
      fallback.width = w;\r
      fallback.height = h;\r
      fallback.getContext("2d")?.drawImage(img, 0, 0, w, h);\r
\r
      // @ts-ignore – glfx attaches to window\r
      const fxCanvas = window.fx?.canvas?.();\r
      if (!fxCanvas) {\r
        console.warn("glfx: WebGL not available – sticking with 2‑D canvas");\r
        img.style.display = "none"; // already drawn to fallback canvas\r
        fallback.style.display = "block";\r
        return;\r
      }\r
      glCanvas = fxCanvas;\r
      glCanvas.classList.add("fx-canvas");\r
      glCanvas.getContext("webgl")?.getExtension("WEBGL_color_buffer_float");\r
\r
      const texture = glCanvas.texture(img);\r
      // Swap in GPU canvas\r
      fallback.replaceWith(glCanvas);\r
      img.style.display = "none";\r
\r
      const draw = () => {\r
        if (disposed) return;\r
        let chain: any = glCanvas.draw(texture);\r
\r
        const e = mergedEffects;\r
        if (e.brightnessContrast) chain = chain.brightnessContrast(...e.brightnessContrast);\r
        if (e.hueSaturation) chain = chain.hueSaturation(...e.hueSaturation);\r
        if (typeof e.sepia === "number") chain = chain.sepia(e.sepia);\r
        if (typeof e.curves !== "undefined") chain = chain.curves(...e.curves);\r
\r
        if (typeof e.denoise === "number") chain = chain.denoise(e.denoise);\r
        if (typeof e.triangleBlur === "number") chain = chain.triangleBlur(e.triangleBlur);\r
        if (e.lensBlur) chain = chain.lensBlur(...e.lensBlur);\r
        if (e.tiltShift) chain = chain.tiltShift(...e.tiltShift);\r
        if (e.unsharpMask) chain = chain.unsharpMask(...e.unsharpMask);\r
        if (e.bulgePinch) chain = chain.bulgePinch(...e.bulgePinch);\r
        if (e.zoomBlur) {\r
          const params = e.zoomBlur.length === 1 ? [w / 2, h / 2, e.zoomBlur[0]] : e.zoomBlur;\r
          chain = chain.zoomBlur(...params);\r
        }\r
        if (e.swirl) chain = chain.swirl(...e.swirl);\r
        if (e.perspective) chain = chain.perspective(...e.perspective);\r
        if (e.hexagonalPixelate) chain = chain.hexagonalPixelate(...e.hexagonalPixelate);\r
        if (e.dotScreen) chain = chain.dotScreen(...e.dotScreen);\r
        if (e.colorHalftone) chain = chain.colorHalftone(...e.colorHalftone);\r
        if (typeof e.noise === "number") chain = chain.noise(e.noise);\r
        if (typeof e.ink === "number") chain = chain.ink(e.ink);\r
        if (e.vignette) chain = chain.vignette(...e.vignette);\r
\r
        chain.update();\r
        rafId = requestAnimationFrame(draw);\r
      };\r
\r
      draw();\r
    };\r
\r
    run();\r
    return abort;\r
  }, [src, mergedEffects]);\r
\r
  return (\r
    <div\r
      ref={wrapperRef}\r
      className="image-wrapper js-image"\r
      style={{ "--img-url": \`url(\${src})\` } as React.CSSProperties}\r
    >\r
      <img\r
        ref={imgRef}\r
        src={src}\r
        alt={alt}\r
        className="image"\r
        crossOrigin="anonymous"\r
        style={{ display: "block" }}\r
      />\r
      <canvas ref={fallbackCanvasRef} style={{ display: "none" }} />\r
    </div>\r
  );\r
}\r
\`\`\`\r
\r
With the CSS given for the \`js-image\` wrapper as:\r
\r
\`\`\`css\r
.js-image canvas {\r
    width: 100%;\r
    height: auto;\r
    display: block;\r
    max-width: 100%;\r
}\r
\`\`\`\r
\r
You can use the following for the effects:\r
\r
| Effect              | Parameters                                            | Type / Range                               | Description                                                                 |\r
|---------------------|--------------------------------------------------------|--------------------------------------------|-----------------------------------------------------------------------------|\r
| \`bulgePinch\`        | \`[cx, cy, radius, strength]\`                          | Pixels, Pixels, Pixels, \`-1\` to \`+1\`        | Distorts the image outward/inward from a point.                             |\r
| \`vignette\`          | \`[size, amount]\`                                      | \`0\` to \`1\`, \`0\` to \`1\`                      | Darkens image corners, fading from centre.                                  |\r
| \`brightnessContrast\`| \`[brightness, contrast]\`                              | \`-1\` to \`+1\`, \`-1\` to \`+1\`                  | Adjusts brightness and contrast.                                            |\r
| \`hueSaturation\`     | \`[hue, sat]\`                                          | \`-1\` to \`+1\`, \`-1\` to \`+1\`                  | Adjusts hue rotation and saturation.                                        |\r
| \`sepia\`             | \`amount\`                                              | \`0\` to \`1\`                                  | Applies sepia tone.                                                         |\r
| \`curves\`            | \`[channel, ...points]\`                                | \`"r" | "g" | "b" | "rgb"\`, 0–1 values       | Tone curve mapping per channel or all.                                      |\r
| \`noise\`             | \`amount\`                                              | \`0\` to \`1\`                                  | Adds random noise.                                                          |\r
| \`denoise\`           | \`strength\`                                            | \`0\` to \`50\`                                 | Reduces noise by smoothing image.                                           |\r
| \`unsharpMask\`       | \`[radius, strength]\`                                  | Pixels, \`0\` to \`5\`                          | Sharpens image using unsharp mask.                                          |\r
| \`ink\`               | \`amount\`                                              | \`0\` to \`1\`                                  | Adds ink-like edge enhancement.                                             |\r
| \`triangleBlur\`      | \`radius\`                                              | Pixels                                      | Blurs using triangle kernel.                                                |\r
| \`zoomBlur\`          | \`[strength]\` or \`[cx, cy, strength]\`                 | Pixels, Pixels, \`0\`+                        | Blurs radially outward from a point.                                        |\r
| \`swirl\`             | \`[cx, cy, radius, angle]\`                             | Pixels, Pixels, Pixels, Radians             | Swirls image content around a point.                                        |\r
| \`lensBlur\`          | \`[radius, brightness, angle]\`                         | Pixels, \`0\` to \`1\`, Radians                 | Simulates shallow depth of field.                                           |\r
| \`tiltShift\`         | \`[x0, y0, x1, y1, blurRad, gradRad]\`                 | Pixels                                      | Simulates tilt‑shift lens blur between two lines.                           |\r
| \`hexagonalPixelate\` | \`[cx, cy, size]\`                                      | Pixels, Pixels, Pixels                      | Pixelates image using hexagonal tiling.                                     |\r
| \`dotScreen\`         | \`[cx, cy, angle, size]\`                               | Pixels, Pixels, Radians, Pixels             | Applies halftone dot screen pattern.                                        |\r
| \`colorHalftone\`     | \`[cx, cy, angle, size]\`                               | Pixels, Pixels, Radians, Pixels             | Applies CMYK-style halftone effect.                                         |\r
| \`perspective\`       | \`[[x0, y0][], [x1, y1][]]\`                            | Four 2D points (src and dest quads)         | Warps image from one quadrilateral to another.                              |\r
`;export{n as default};
