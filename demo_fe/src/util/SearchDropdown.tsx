import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchBarProps, CategoryOption } from '../type/UserType';

const SearchBar: React.FC<SearchBarProps> = ({ categories, onSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>('All Categories');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSubmit = () => {
    onSearch(searchTerm, selectedCategory);
  };

  return (
    <div className="flex rounded overflow-hidden border w-full max-w-3xl">
      <select
        className="bg-white border-r px-3 py-2 text-sm focus:outline-none"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="text"
        className="flex-grow px-4 py-2 text-sm focus:outline-none"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 flex items-center justify-center hover:bg-blue-700"
      >
        <Search size={18} />
      </button>
    </div>
  );
};

export default SearchBar;
