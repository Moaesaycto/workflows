import { ArrowUp, ArrowDown } from "lucide-react";

export default function SortButton({ sortAsc, setSortAsc }: { sortAsc: boolean; setSortAsc: (s: boolean) => void }) {
  return (
    <button
      onClick={() => setSortAsc(!sortAsc)}
      className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-md"
      style={{
        backgroundColor: "var(--primary-color)",
        color: sortAsc ? "#ffffff" : "#000000",
      }}
    >
      {sortAsc ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
      {sortAsc ? "Sort A-Z" : "Sort Z-A"}
    </button>
  );
}
