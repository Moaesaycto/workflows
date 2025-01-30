const allFiles = import.meta.glob('/src/workflows/**/*.md', { query: '?raw', import: 'default' });
const allAssets = import.meta.glob('/src/workflows/**/style.json', { eager: true, query: '?json' });
const allIcons = import.meta.glob('/src/workflows/**/icon.png', { eager: true, query: '?url', import: 'default' });

export function getDirectChildFolders(basePath: "workflows", category?: string) {
    const folders = new Set<string>();
    const files: Record<string, string[]> = {};
    const styles: Record<string, any> = {};
    const icons: Record<string, string> = {};

    Object.keys(allFiles).forEach((filePath) => {
        const parts = filePath.split('/');
        const baseIndex = parts.indexOf(basePath);

        if (category) {
            if (baseIndex !== -1 && parts.length > baseIndex + 2 && parts[baseIndex + 1] === category) {
                const subcategory = parts[baseIndex + 2];
                folders.add(subcategory);

                if (!files[subcategory]) files[subcategory] = [];
                files[subcategory].push(parts.slice(baseIndex + 3).join("/"));
            }
        } else {
            if (baseIndex !== -1 && parts.length > baseIndex + 1) {
                folders.add(parts[baseIndex + 1]);
            }
        }
    });

    Object.entries(allAssets).forEach(([path, data]) => {
        const parts = path.split('/');
        const subcategory = parts[parts.length - 2];
        styles[subcategory] = data;
    });

    Object.entries(allIcons).forEach(([path, url]) => {
        const parts = path.split('/');
        const subcategory = parts[parts.length - 2];
        icons[subcategory] = url as string
    });

    return {
        subcategories: Array.from(folders),
        files,
        styles,
        icons,
    };
}


const allMarkdownFiles = import.meta.glob('/src/workflows/**/*.md', { query: '?raw', import: 'default' });

export function getMarkdownContent(filePath: string): Promise<string> {
    const matchingKey = Object.keys(allMarkdownFiles).find(key => key.includes(filePath));

    if (matchingKey && allMarkdownFiles[matchingKey]) {
        return allMarkdownFiles[matchingKey]() as Promise<string>;
    } else {
        return Promise.resolve('Markdown file not found.');
    }
}