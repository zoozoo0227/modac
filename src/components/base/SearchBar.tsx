
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterClick: () => void;
}

export default function SearchBar({ onSearch, onFilterClick }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center bg-white rounded-full shadow-sm border border-gray-100 mx-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="어디로 가고 싶으세요?"
        className="flex-1 py-3 px-4 pr-12 text-sm rounded-full border-none outline-none"
      />
      <button
        type="button"
        onClick={onFilterClick}
        className="absolute right-12 p-2 text-amber-600 hover:text-amber-700"
      >
        <i className="ri-filter-line w-5 h-5 flex items-center justify-center"></i>
      </button>
      <button
        type="submit"
        className="absolute right-2 p-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
      >
        <i className="ri-search-line w-4 h-4 flex items-center justify-center"></i>
      </button>
    </form>
  );
}
