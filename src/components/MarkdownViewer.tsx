import { useEffect, useState, useMemo, memo } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";
import { Clipboard, Check, Share2 } from "lucide-react";
import { getMarkdownContent } from "../utils/file";
import { useTheme } from "../App";
import { isColorDark } from "../utils/color";

interface MarkdownViewerProps {
  filePath: string;
}

const config = {
  tex: {
    packages: { "[+]": ["base", "autoload", "mathtools"] },
  },
};

export default function MarkdownViewer({ filePath }: MarkdownViewerProps) {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const languageImports: [string, () => Promise<any>][] = [
      ["tsx", () => import("react-syntax-highlighter/dist/esm/languages/prism/tsx")],
      ["typescript", () => import("react-syntax-highlighter/dist/esm/languages/prism/typescript")],
      ["javascript", () => import("react-syntax-highlighter/dist/esm/languages/prism/javascript")],
      ["jsx", () => import("react-syntax-highlighter/dist/esm/languages/prism/jsx")],
      ["java", () => import("react-syntax-highlighter/dist/esm/languages/prism/java")],
      ["python", () => import("react-syntax-highlighter/dist/esm/languages/prism/python")],
      ["cpp", () => import("react-syntax-highlighter/dist/esm/languages/prism/cpp")],
      ["c", () => import("react-syntax-highlighter/dist/esm/languages/prism/c")],
      ["markdown", () => import("react-syntax-highlighter/dist/esm/languages/prism/markdown")],
      ["bash", () => import("react-syntax-highlighter/dist/esm/languages/prism/bash")]
    ];

    languageImports.forEach(async ([lang, importer]) => {
      const mod = await importer();
      SyntaxHighlighter.registerLanguage(lang, mod.default);
    });
  }, []);

  useEffect(() => {
    getMarkdownContent(filePath).then(setContent);
  }, [filePath]);

  // Compute route parts only when filePath changes.
  const parts = useMemo(() => filePath.split("/"), [filePath]);
  const category = parts[3] || "";
  const subcategory = parts[4] || "";
  const articleTitle = (parts[5] || "").replace(".md", "").replace(/-/g, " ");
  const articleRoute = useMemo(
    () =>
      `${capitalize(category)} / ${capitalize(subcategory)} / ${capitalize(articleTitle)}`.replace(
        /_/g,
        " "
      ),
    [category, subcategory, articleTitle]
  );

  // Memoize the mapping for markdown components so they aren’t re‑created on every render.
  const markdownComponents = useMemo(
    () => ({
      h1: ({ children }: { children?: React.ReactNode }) => (
        <h1 className="text-3xl font-bold">{children}</h1>
      ),
      h2: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="text-2xl font-semibold mt-10">{children}</h2>
      ),
      h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="text-xl font-medium mt-4">{children}</h3>
      ),
      p: ({ node, children }: { node?: any; children?: React.ReactNode }) => {
        if (node?.parent?.type === "listItem") {
          return <span className="text-lg text-gray-300">{children}</span>;
        }
        return <p className="text-lg text-gray-300 mt-2">{children}</p>;
      },
      blockquote: ({ children }: { children?: React.ReactNode }) => (
        <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-400">
          {children}
        </blockquote>
      ),
      code: CodeBlock,
      img: ({ src, alt }: { src?: string; alt?: string }) => (
        <img
          src={src || ""}
          alt={alt || ""}
          className="max-w-full max-h-96 h-auto rounded-lg shadow-md mx-auto block"
        />
      ),
      table: ({ children }: { children?: React.ReactNode }) => (
        <table className="border-collapse border border-gray-500 w-full text-left my-4">
          {children}
        </table>
      ),
      th: ({ children }: { children?: React.ReactNode }) => (
        <th className="border border-gray-500 bg-gray-800 text-white px-4 py-2">{children}</th>
      ),
      td: ({ children }: { children?: React.ReactNode }) => (
        <td className="border border-gray-500 px-4 py-2">{children}</td>
      ),
      ul: ({ children }: { children?: React.ReactNode }) => (
        <ul className="list-disc pl-6">{children}</ul>
      ),
      ol: ({ children }: { children?: React.ReactNode }) => (
        <ol className="list-decimal pl-6">{children}</ol>
      ),
      li: ({ children }: { children?: React.ReactNode }) => (
        <li className="mb-1">{children}</li>
      ),
      hr: () => <hr className="my-8 border-gray-700" />,
    }),
    []
  );

  return (
    <MathJaxContext config={config}>
      <div>
        <div className="p-4">
          <div className="flex flex-col md:flex-row w-full justify-between items-center bg-zinc-900 p-4 rounded-lg mb-3 gap-4">
            <h3 className="uppercase font-bold text-xl text-center md:text-left">{articleRoute}</h3>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <ShareButton />
              <ReturnButton category={category} />
            </div>
          </div>

          <div className="p-4 bg-zinc-900 text-white rounded-md">
            <MathJax dynamic>
              <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                components={markdownComponents}
              >
                {content}
              </ReactMarkdown>
            </MathJax>
          </div>
          <div className="my-4 flex justify-between items-center">
            <div className="text-xl italic">
              You have finished this article. Return to the {category} page to browse more articles.
            </div>
            <ReturnButton category={category} />
          </div>
        </div>
      </div>
    </MathJaxContext>
  );
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * A custom hook for copy-to-clipboard functionality.
 */
function useCopyToClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    });
  };

  return { copied, copy };
}

interface CodeBlockProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const CodeBlock = memo(function CodeBlock({
  inline,
  className,
  children,
  ...props
}: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "text";
  const { copied, copy } = useCopyToClipboard();
  const content = String(children).replace(/\n$/, "");

  const handleCopy = () => {
    copy(content);
  };

  if (!inline && match) {
    return (
      <div className="relative my-4 rounded-md overflow-hidden border border-gray-700 bg-gray-800">
        <div className="flex justify-between items-center bg-gray-700 text-gray-300 px-3 py-1 text-sm font-semibold">
          <span>{language.toUpperCase()}</span>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 text-gray-400 hover:text-white transition"
          >
            <Clipboard size={16} />
            <span className="text-xs">{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>
        <SyntaxHighlighter
          style={oneDark}
          language={language}
          PreTag="div"
          className="!m-0 horizontal-scroll-code"
          {...props}
        >
          {content}
        </SyntaxHighlighter>
      </div>
    );
  }
  return <code className="bg-gray-800 text-red-400 px-1 py-0.5 rounded">{children}</code>;
});

interface ReturnButtonProps {
  category: string;
}

const ReturnButton = memo(function ReturnButton({ category }: ReturnButtonProps) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 flex items-center group"
      onClick={() => navigate(`/${category}`)}
      style={{
        backgroundColor: theme["--secondary-color"],
        color: isColorDark(theme["--secondary-color"]) ? "#ffffff" : "#000000",
      }}
    >
      <span className="mr-2 transition-transform duration-300 transform group-hover:-translate-x-1">
        ←
      </span>
      Back to {capitalize(category)}
    </button>
  );
});

const ShareButton = memo(function ShareButton() {
  const { copied, copy } = useCopyToClipboard();

  const handleShare = () => {
    copy(window.location.href);
  };

  return (
    <button
      className="px-4 py-2 bg-zinc-500 text-white rounded-lg shadow-md hover:bg-zinc-600 flex items-center"
      onClick={handleShare}
    >
      {copied ? <Check className="mr-2" size={16} /> : <Share2 className="mr-2" size={16} />}
      {copied ? "Copied!" : "Share"}
    </button>
  );
});
