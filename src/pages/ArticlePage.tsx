import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";

const MarkdownViewer = lazy(() => import("../components/MarkdownViewer"));

export default function ArticlePage() {
  const { category, subcategory, article } = useParams();

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

// 🔹 Styled Loading Screen Component
const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-10">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-medium text-gray-400">Loading article...</p>
    </div>
  );
};
