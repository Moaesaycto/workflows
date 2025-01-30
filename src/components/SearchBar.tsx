import { Search } from "lucide-react";

export default function SearchBar({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (q: string) => void }) {
  return (
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
  );
}
