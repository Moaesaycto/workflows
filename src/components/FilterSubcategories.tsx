import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

interface FilterSubcategoriesProps {
  subcategories: { subcategory: string }[];
  selectedSubcategories: string[];
  setSelectedSubcategories: (s: string[]) => void;
}

export default function FilterSubcategories({ subcategories, selectedSubcategories, setSelectedSubcategories }: FilterSubcategoriesProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleCheckboxChange = (subcategory: string) => {
    setSelectedSubcategories(
      selectedSubcategories.includes(subcategory)
        ? selectedSubcategories.filter((s: string) => s !== subcategory)
        : [...selectedSubcategories, subcategory]
    );
  };

  return (
    <div className="px-4 pb-4">
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="w-full flex justify-between items-center px-4 py-2 rounded-lg shadow-md"
        style={{
          backgroundColor: "var(--secondary-color)",
          color: "white",
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
                onChange={() => handleCheckboxChange(subcategory)}
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
  );
}
