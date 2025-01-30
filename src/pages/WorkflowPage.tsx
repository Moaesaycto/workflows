import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDirectChildFolders } from "../utils/file";
import CollapsibleSection from "../components/CollapsibleSection";
import { useTheme } from "../App";
import { isColorDark } from "../utils/color";
import { Search, ArrowUp, ArrowDown, ChevronDown, ChevronUp } from "lucide-react";

export default function WorkflowPage() {
  const location = useLocation();
  const { theme } = useTheme();
  
  const [subcategories, setSubcategories] = useState<
    { subcategory: string; files: string[]; style?: any; icon?: string }[]
  >([]);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const category = location.pathname.replace("/", "");

  useEffect(() => {
    if (category) {
      const { subcategories, files, styles, icons } = getDirectChildFolders("workflows", category);

      const formattedData = subcategories.map(sub => ({
        subcategory: sub,
        files: files[sub] || [],
        style: styles[sub] || {},
        icon: icons[sub] ? "./.." + icons[sub] : "",
      }));

      console.log(formattedData);

      setSubcategories(formattedData);
    }
  }, [category]);

  const filteredSubcategories = subcategories
    .map(({ subcategory, files, style, icon }) => {
      const filteredFiles = files.filter(file => file.toLowerCase().includes(searchQuery.toLowerCase()));

      return {
        subcategory,
        files: filteredFiles,
        style,
        icon,
      };
    })
    .filter(({ subcategory, files }) => 
      files.length > 0 && (selectedSubcategories.length === 0 || selectedSubcategories.includes(subcategory))
    );

  const sortedSubcategories = [...filteredSubcategories].sort((a, b) => 
    sortAsc ? a.subcategory.localeCompare(b.subcategory) : b.subcategory.localeCompare(a.subcategory)
  );

  return (
    <div>
      <div className="shadow-md">
        <h2
          className="px-5 py-2 uppercase text-center font-bold text-3xl"
          style={{
            backgroundColor: theme["--secondary-color"],
            color: isColorDark(theme["--secondary-color"]) ? "#ffffff" : "#000000"
          }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>
        <div className="w-full h-2" style={{ backgroundColor: theme["--primary-color"] }} />
      </div>

      <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search article titles..."
            className="w-full px-4 py-2 rounded-lg shadow-md border border-gray-300 bg-zinc-900"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>

        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-md"
          style={{
            backgroundColor: theme["--primary-color"],
            color: isColorDark(theme["--primary-color"]) ? "#ffffff" : "#000000",
          }}
        >
          {sortAsc ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
          {sortAsc ? "Sort A-Z" : "Sort Z-A"}
        </button>
      </div>

      <div className="px-4 pb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex justify-between items-center px-4 py-2 rounded-lg shadow-md"
          style={{
            backgroundColor: theme["--secondary-color"],
            color: isColorDark(theme["--secondary-color"]) ? "#ffffff" : "#000000",
          }}
        >
          Filter by Subcategory
          {isFilterOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {isFilterOpen && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-1 bg-zinc-900 rounded-b-lg">
            {subcategories.map(({ subcategory }) => (
                <label
                key={subcategory}
                className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer"
                >
                <input
                  type="checkbox"
                  checked={selectedSubcategories.includes(subcategory)}
                  onChange={() => {
                  setSelectedSubcategories(prev =>
                    prev.includes(subcategory)
                    ? prev.filter(s => s !== subcategory)
                    : [...prev, subcategory]
                  );
                  }}
                  className="hidden"
                />
                <div className="w-5 h-5 border border-gray-400 flex items-center justify-center rounded">
                  {selectedSubcategories.includes(subcategory) && (
                  <div className="w-3 h-3 bg-white rounded"></div>
                  )}
                </div>
                {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
                </label>
            ))}
          </div>
        )}
      </div>

      {sortedSubcategories.length > 0 ? (
        <ul className={`p-4 ${searchQuery ? "grid-cols-1" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start"}`}>
          {sortedSubcategories.map(({ subcategory, files, style, icon }) => (
            <CollapsibleSection 
              key={subcategory} 
              title={subcategory} 
              icon={icon} 
              style={style} 
              isOpenByDefault={!!searchQuery}
            >
              {files.map((file) => (
                <li
                  key={file}
                  className="m-1 py-1 px-3 rounded-lg"
                  style={{
                    backgroundColor: style.articleBackgroundColor,
                  }}
                >
                  <a
                    href={`#/${category}/${subcategory}/${file}`}
                    className="block w-full h-full"
                    style={{
                      color: isColorDark(style.articleBackgroundColor) ? "#ffffff" : "#000000"
                    }}
                  >
                    {file.replace(".md", "").replace(/-/g, " ")}
                  </a>
                </li>
              ))}
            </CollapsibleSection>
          ))}
        </ul>
      ) : (
        <p className="text-center mt-5 text-gray-600">No matching results.</p>
      )}
    </div>
  );
}
