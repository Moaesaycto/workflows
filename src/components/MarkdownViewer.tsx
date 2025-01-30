import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getMarkdownContent } from "../utils/file";
import { useTheme } from "../App";
import { isColorDark } from "../utils/color";
import "katex/dist/katex.min.css";

export default function MarkdownViewer({ filePath }: { filePath: string }) {
    const [content, setContent] = useState("");

    useEffect(() => {
        getMarkdownContent(filePath).then(setContent);
    }, [filePath]);

    const parts = filePath.split("/");
    const category = parts[3];
    const subcategory = parts[4];
    const articleTitle = parts[5].replace(".md", "").replace(/-/g, " ");
    const articleRoute = `${category.charAt(0).toUpperCase() + category.slice(1)} / ${subcategory.charAt(0).toUpperCase() + subcategory.slice(1)} / ${articleTitle.charAt(0).toUpperCase() + articleTitle.slice(1)}`.replace(/_/g, " ");;

    return (
        <div>
            <div className="p-4">
                <div className="flex flex-row w-full justify-between items-center bg-zinc-900 p-4 rounded-lg mb-3">
                    <h3 className="uppercase font-bold text-xl">
                        {articleRoute}
                    </h3>
                    <ReturnButton category={category} />
                </div>
                <div className="p-4 bg-zinc-900 text-white rounded-md">
                    <ReactMarkdown
                        remarkPlugins={[remarkMath, remarkGfm]}
                        rehypePlugins={[rehypeKatex]}
                        components={{
                            h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-2xl font-semibold mt-10">{children}</h2>,
                            h3: ({ children }) => <h3 className="text-xl font-medium mt-4">{children}</h3>,
                            p: ({ children }) => <p className="text-lg text-gray-300 mt-2">{children}</p>,
                            ul: ({ children }) => <ul className="list-disc ml-5 mt-2">{children}</ul>,
                            ol: ({ children }) => <ol className="list-decimal ml-5 mt-2">{children}</ol>,
                            hr: () => <hr className="my-8 border-gray-700" />,
                            blockquote: ({ children }) => (
                                <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-400">
                                    {children}
                                </blockquote>
                            ),
                            code({ node, inline = false, className, children, ...props }: { node?: any, inline?: boolean, className?: string, children?: React.ReactNode }) {
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
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
                <div className="my-4 flex justify-between items-center">
                    <div className="text-xl italic">
                        You have finished this article. Return to the {category} page to browse more articles.
                    </div>
                    <ReturnButton category={category} />
                </div>
            </div>
        </div >
    );
}

const ReturnButton = ({ category }: { category: string }) => {
    const navigate = useNavigate();
    const { theme } = useTheme();

    return (
        <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 flex items-center group"
            onClick={() => navigate(`/${category}`)}
            style={{
                backgroundColor: theme["--secondary-color"],
                color: isColorDark(theme["--secondary-color"]) ? "#ffffff" : "#00000"
            }}
        >
            <span className="mr-2 transition-transform duration-300 transform group-hover:-translate-x-1">
                ←
            </span>
            Back to {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
    )
}