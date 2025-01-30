import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { isColorDark } from "../utils/color";

interface CollapsibleSectionProps {
  title: string;
  icon?: string;
  style?: any;
  children: React.ReactNode;
  isOpenByDefault?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, icon, style, children, isOpenByDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  useEffect(() => {
    setIsOpen(isOpenByDefault);
  }, [isOpenByDefault]);

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
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleSection;
