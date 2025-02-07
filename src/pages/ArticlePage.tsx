import { useParams } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

const MarkdownViewer = lazy(() => import("../components/MarkdownViewer"));

export default function ArticlePage() {
  const { category, subcategory, article } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, subcategory, article]);

  if (!category || !subcategory || !article) {
    return <p className="text-center mt-5 text-gray-600">Invalid article path.</p>;
  }

  const filePath = `/src/workflows/${category}/${subcategory}/${article}.md`;

  return (
    <div>
      <Suspense fallback={<LoadingScreen />}>
        <MarkdownViewer filePath={filePath} />
      </Suspense>
    </div>
  );
}

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-medium text-gray-400">Loading article...</p>
    </div>
  );
};
