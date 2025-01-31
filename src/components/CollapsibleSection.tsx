import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { isColorDark } from "../utils/color";
import { useNavigate } from "react-router-dom";

interface CollapsibleSectionProps {
  title: string;
  icon?: string;
  style?: any;
  files: string[];
  category: string;
  subcategory: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  icon,
  style,
  files,
  category,
  subcategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const textColor = style?.backgroundColor && isColorDark(style.backgroundColor) ? "#ffffff" : "#000000";

  return (
    <div className="rounded-lg mb-5 shadow-md" style={{ backgroundColor: style?.backgroundColor }}>
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
          <span className="uppercase font-bold" style={{ color: textColor }}>{title.replace(/_/g, " ")}</span>
        </div>
        {isOpen ? <ChevronUp size={20} color={textColor} /> : <ChevronDown size={20} color={textColor} />}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {files.map((file) => (
              <div
                key={file}
                className="m-1 py-1 px-3 rounded-lg cursor-pointer"
                style={{
                  backgroundColor: style.articleBackgroundColor,
                  color: isColorDark(style.articleBackgroundColor) ? "#ffffff" : "#000000",
                }}
                onClick={() =>
                  navigate(`/${category}/${subcategory}/${file.replace(".md", "")}`)
                }
              >
                {file.replace(".md", "").replace(/-/g, " ")}
              </div>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleSection;
