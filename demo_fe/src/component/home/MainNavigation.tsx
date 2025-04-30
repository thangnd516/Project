// MainNavigation Component
import React from 'react';
import { Heart, Search, ShoppingCart, ChevronDown, User } from 'lucide-react';
export const MainNavigation = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="py-3 px-4 bg-blue-600">
            <button className="flex items-center space-x-2">
              <span>Shop By Categories</span>
              <ChevronDown size={16} />
            </button>
          </div>
          
          <div className="flex ml-6">
            <a href="#" className="py-3 px-4 bg-blue-600">Home</a>
            <a href="#" className="py-3 px-4 hover:bg-blue-600">Shop</a>
            <a href="#" className="py-3 px-4 hover:bg-blue-600 flex items-center">
              Categories
              <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="py-3 px-4 hover:bg-blue-600 flex items-center">
              Products
              <ChevronDown size={16} className="ml-1" />
            </a>
            <a href="#" className="py-3 px-4 hover:bg-blue-600">Top Deals</a>
            <a href="#" className="py-3 px-4 hover:bg-blue-600 flex items-center">
              Elements
              <ChevronDown size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};