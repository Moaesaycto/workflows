import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { isColorDark } from "../utils/color";

interface StyleProps {
  backgroundColor?: string;
  iconBackgroundColor?: string;
  articleBackgroundColor?: string;
}

interface CollapsibleSectionProps {
  title: string;
  icon?: string;
  style?: StyleProps;
  items: string[];
  isSearching: boolean;
  onItemClick?: (item: string) => void;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  icon,
  style,
  items,
  isSearching,
  onItemClick,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    if (isSearching) {
      setVisibleCount(items.length);
    } else {
      setVisibleCount(5);
    }
  }, [isSearching, items.length]);

  const displayedItems = isSearching ? items : items.slice(0, visibleCount);

  const textColor =
    style?.backgroundColor && isColorDark(style.backgroundColor)
      ? "#ffffff"
      : "#000000";

  return (
    <div
      className="rounded-lg mb-5 shadow-md"
      style={{ backgroundColor: style?.backgroundColor }}
    >
      <div
        className="subcategory p-2 rounded-lg cursor-pointer flex items-center justify-between"
        style={{ backgroundColor: style?.backgroundColor || "#f5f5f5" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {icon && (
            <img
              src={icon}
              alt=""
              className="w-8 h-8 object-contain p-1 rounded-full"
              style={{ backgroundColor: style?.iconBackgroundColor }}
            />
          )}
          <span className="uppercase font-bold" style={{ color: textColor }}>
            {title.replace(/_/g, " ")}
          </span>
        </div>

        {isOpen ? (
          <ChevronUp size={20} color={textColor} />
        ) : (
          <ChevronDown size={20} color={textColor} />
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="collapsible-content"
            style={{ overflow: "hidden" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul>
              {displayedItems.map((fileName) => {
                const displayName = fileName
                  .replace(".md", "")
                  .replace(/-/g, " ");
                return (
                  <motion.li
                    key={fileName}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="m-1 py-1 px-3 rounded-lg cursor-pointer"
                    style={{
                      backgroundColor: style?.articleBackgroundColor,
                      color: isColorDark(style?.articleBackgroundColor ?? "#fff")
                        ? "#ffffff"
                        : "#000000",
                    }}
                    onClick={() => onItemClick?.(fileName)}
                  >
                    {displayName}
                  </motion.li>
                );
              })}
            </ul>

            {!isSearching && (
                <div className="mx-3 mt-2 mb-2 flex items-center justify-between gap-4">
                {visibleCount < items.length && (
                  <button
                  onClick={() => setVisibleCount((prev) => prev + 5)}
                  className="text-blue-500 hover:underline font-bold"
                  style={{
                    color: isColorDark(style?.backgroundColor ?? "#fff")
                    ? "#ffffff"
                    : "#000000",
                  }}
                  >
                  Load More
                  </button>
                )}
                {visibleCount > 5 && (
                  <button
                  onClick={() => setVisibleCount((prev) => prev - 5)}
                  className="text-blue-500 hover:underline font-bold ml-auto"
                  style={{
                    color: isColorDark(style?.backgroundColor ?? "#fff")
                    ? "#ffffff"
                    : "#000000",
                  }}
                  >
                  Show Less
                  </button>
                )}
                </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleSection;
