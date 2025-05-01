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
    <div style={{
      borderRadius: "20px",
      border: "1px solid #e5e5e5"
    }} className="flex rounded overflow-hidden border w-full max-w-3xl">
      <select
        style={{
            borderRight: "1px solid #e5e5e5"
        }
        }
        className="bg-white px-3 py-2 text-sm focus:outline-none"
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
        className=" px-4 flex items-center justify-center"
      >
        <Search size={18} />
      </button>
    </div>
  );
};

export default SearchBar;
