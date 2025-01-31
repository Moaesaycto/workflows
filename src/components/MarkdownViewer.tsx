import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getMarkdownContent } from "../utils/file";
import { useTheme } from "../App";
import { isColorDark } from "../utils/color";

interface MarkdownViewerProps {
    filePath: string;
}

export default function MarkdownViewer({ filePath }: MarkdownViewerProps) {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        getMarkdownContent(filePath).then(setContent);
    }, [filePath]);

    const parts: string[] = filePath.split("/");
    const category: string = parts[3] || "";
    const subcategory: string = parts[4] || "";
    const articleTitle: string = (parts[5] || "").replace(".md", "").replace(/-/g, " ");
    const articleRoute: string = `${capitalize(category)} / ${capitalize(subcategory)} / ${capitalize(articleTitle)}`.replace(/_/g, " ");

    return (
        <MathJaxContext>
            <div>
                <div className="p-4">
                    <div className="flex flex-row w-full justify-between items-center bg-zinc-900 p-4 rounded-lg mb-3 gap-4">
                        <h3 className="uppercase font-bold text-xl">{articleRoute}</h3>
                        <ReturnButton category={category} />
                    </div>

                    <div className="p-4 bg-zinc-900 text-white rounded-md">
                        <MathJax dynamic>
                            <ReactMarkdown
                                remarkPlugins={[remarkMath, remarkGfm]}
                                components={{
                                    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
                                    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-10">{children}</h2>,
                                    h3: ({ children }) => <h3 className="text-xl font-medium mt-4">{children}</h3>,
                                    p: ({ children }: { children?: React.ReactNode }) => {
                                        if (typeof children === "string") {
                                            if (children.match(/^\$\$(.*?)\$\$$/s) || children.match(/^\\\[(.*?)\\\]$/s)) {
                                                return (
                                                    <div className="overflow-x-auto w-full overflow-y-hidden horizontal-scroll">
                                                        <MathJax>{children}</MathJax>
                                                    </div>
                                                );
                                            }
                                            if (children.match(/\$(.*?)\$/)) {
                                                return <MathJax inline>{children}</MathJax>;
                                            }
                                        }
                                        return <p className="text-lg text-gray-300 mt-2">{children}</p>;
                                    },
                                    blockquote: ({ children }) => (
                                        <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-400">
                                            {children}
                                        </blockquote>
                                    ),
                                    code({ inline, className, children, ...props }: { inline?: boolean; className?: string; children?: React.ReactNode }) {
                                        const match = /language-(\w+)/.exec(className || "");
                                        return !inline && match ? (
                                            <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
                                                {String(children).replace(/\n$/, "")}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code className="bg-gray-800 text-red-400 px-1 py-0.5 rounded">
                                                {children}
                                            </code>
                                        );
                                    },
                                    img: ({ src, alt }) => (
                                        <img
                                            src={src || ""}
                                            alt={alt || ""}
                                            className="max-w-full max-h-96 h-auto rounded-lg shadow-md mx-auto block"
                                        />
                                    ),
                                    table: ({ children }) => (
                                        <table className="border-collapse border border-gray-500 w-full text-left my-4">
                                            {children}
                                        </table>
                                    ),
                                    th: ({ children }) => (
                                        <th className="border border-gray-500 bg-gray-800 text-white px-4 py-2">
                                            {children}
                                        </th>
                                    ),
                                    td: ({ children }) => (
                                        <td className="border border-gray-500 px-4 py-2">
                                            {children}
                                        </td>
                                    ),
                                    ul: ({ children }) => (
                                        <ul className="list-disc list-inside pl-3">{children}</ul>
                                    ),
                                    ol: ({ children }) => (
                                        <ol className="list-decimal list-inside pl-3">{children}</ol>
                                    ),
                                    li: ({ children }) => (
                                        <li className="ml-3">{children}</li>
                                    ),
                                    hr: () => <hr className="my-8 border-gray-700" />,
                                }}
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

interface ReturnButtonProps {
    category: string;
}

const ReturnButton = ({ category }: ReturnButtonProps) => {
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
};
