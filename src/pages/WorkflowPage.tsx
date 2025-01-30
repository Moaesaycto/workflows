import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, } from "react";
import { getDirectChildFolders } from "../utils/file";
import CollapsibleSection from "../components/CollapsibleSection";
import { isColorDark } from "../utils/color";
import SearchBar from "../components/SearchBar";
import FilterSubcategories from "../components/FilterSubcategories";
import SortButton from "../components/SortButton";

function useNumberOfColumns(searchQuery: string) {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    function updateColumns() {
      if (searchQuery) {
        setColumns(1);
      } else {
        const width = window.innerWidth;
        if (width < 640) {
          setColumns(1);
        } else if (width < 1024) {
          setColumns(2);
        } else {
          setColumns(3);
        }
      }
    }

    window.addEventListener("resize", updateColumns);
    updateColumns();

    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, [searchQuery]);

  return columns;
}

export default function WorkflowPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.pathname.replace("/", "");

  const [subcategories, setSubcategories] = useState<
    { subcategory: string; files: string[]; style?: any; icon?: string }[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

  const columns = useNumberOfColumns(searchQuery);

  useEffect(() => {
    if (category) {
      const { subcategories, files, styles, icons } = getDirectChildFolders("workflows", category);
      setSubcategories(
        subcategories.map((sub) => ({
          subcategory: sub,
          files: files[sub] || [],
          style: styles[sub] || {},
          icon: icons[sub] || "",
        }))
      );
    }
    setSelectedSubcategories([]);
  }, [category]);

  const filteredSubcategories = subcategories
    .map(({ subcategory, files, style, icon }) => ({
      subcategory,
      files: files.filter((file) =>
        file.toLowerCase().includes(searchQuery.toLowerCase())
      ),
      style,
      icon,
    }))
    .filter(({ subcategory, files }) => {
      const matchesSelected =
        selectedSubcategories.length === 0 || selectedSubcategories.includes(subcategory);

      return files.length > 0 && matchesSelected;
    });

  const sortedSubcategories = [...filteredSubcategories].sort((a, b) =>
    sortAsc ? a.subcategory.localeCompare(b.subcategory) : b.subcategory.localeCompare(a.subcategory)
  );

  const columnData: typeof sortedSubcategories[] = Array.from({ length: columns }, () => []);

  sortedSubcategories.forEach((item, index) => {
    const colIndex = index % columns;
    columnData[colIndex].push(item);
  });

  return (
    <div>
      <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SortButton sortAsc={sortAsc} setSortAsc={setSortAsc} />
      </div>

      <FilterSubcategories
        subcategories={subcategories}
        selectedSubcategories={selectedSubcategories}
        setSelectedSubcategories={setSelectedSubcategories}
      />

      {sortedSubcategories.length > 0 ? (
        <div className="flex gap-4 p-4">
          {columnData.map((col, colIdx) => (
            <div key={colIdx} className="flex-1 space-y-4">
              {col.map(({ subcategory, files, style, icon }) => (
                <div key={subcategory}>
                  <CollapsibleSection
                    title={subcategory}
                    icon={icon}
                    style={style}
                    isOpenByDefault={!!searchQuery}
                  >
                    {files.map((file) => (
                      <div
                        key={file}
                        className="m-1 py-1 px-3 rounded-lg cursor-pointer"
                        style={{
                          backgroundColor: style.articleBackgroundColor,
                          color: isColorDark(style.articleBackgroundColor)
                            ? "#ffffff"
                            : "#000000",
                        }}
                        onClick={() =>
                          navigate(`/${category}/${subcategory}/${file.replace(".md", "")}`)
                        }
                      >
                        {file.replace(".md", "").replace(/-/g, " ")}
                      </div>
                    ))}
                  </CollapsibleSection>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-5 text-gray-600">No matching results.</p>
      )}
    </div>
  );
}
