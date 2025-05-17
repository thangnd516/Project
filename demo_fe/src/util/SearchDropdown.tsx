import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchBarProps, CategoryOption, Product } from '../type/UserType';
import * as apiService from '../service/apiService'; 

const SearchBar: React.FC<SearchBarProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>('All Categories');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<Product[]>([]);

  const handleSearch = async () => {
    try {
      const res = await apiService.searchProducts(searchTerm, selectedCategory);
      setResults(res);
    } catch (err) {
      console.error('Search failed', err);
    }
  };

  return (
    <div className="w-full max-w-3xl">
      {/* Search bar */}
      <div
        style={{ borderRadius: "20px", border: "1px solid #e5e5e5" }}
        className="flex rounded overflow-hidden border"
      >
        <select
          style={{ borderRight: "1px solid #e5e5e5" }}
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
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button
          onClick={handleSearch}
          className="px-4 flex items-center justify-center"
        >
          <Search size={18} />
        </button>
      </div>

      {/* Results */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {results.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="h-32 object-contain mb-2" />
            <h3 className="font-semibold text-sm">{product.name}</h3>
            <p className="text-green-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
