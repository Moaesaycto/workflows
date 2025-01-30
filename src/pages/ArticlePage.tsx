import { useParams } from "react-router-dom";
import MarkdownViewer from "../components/MarkdownViewer";

export default function ArticlePage() {
  const { category, subcategory, article } = useParams();

  if (!category || !subcategory || !article) {
    return <p className="text-center mt-5 text-gray-600">Invalid article path.</p>;
  }

  const filePath = `/src/workflows/${category}/${subcategory}/${article}.md`;

  return (
    <div>
      <MarkdownViewer filePath={filePath} />
    </div>
  );
}
