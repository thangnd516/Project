// Header Component
import { Search, ShoppingCart } from 'lucide-react';
import health from "../../assets/health-mart-pharmacy-logo.jpg"
import "./header.scss"
import SearchDropdown from '../../util/SearchDropdown';
import { CategoryOption } from '../../type/UserType';

export const Header = () => {
  const categories: CategoryOption[] = [
    "All Categories", "Personal Care", "Cleansing products", "Hair care",
    "Skin care", "Medicines", "Health Care Combo", "Anti Aging"
  ];
  
  const handleSearch = (term: string, category: CategoryOption) => {
    console.log('Searching for:', term, 'in category:', category);
  };
  return (
    <header className="header-wrap py-4 bg-white shadow-md">
      <div className="header-container container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="">
              <img className='image-logo' src={health} alt="" />
          </a>
          
          {/* Search */}
          <div className="flex-1 mx-8">
          <SearchDropdown categories={categories} onSearch={handleSearch} />
          </div>
          
          {/* Contact and Cart */}
          <div className="flex items-center space-x-6">
            <div>
              <div className="text-xs text-gray-500">Call us now:</div>
              <div className="font-semibold">+362 325 654 789</div>
            </div>
            
            <div className="relative">
              <a href="#" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md">
                <ShoppingCart size={20} className="mr-2" />
                <span>$35.00</span>
              </a>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};