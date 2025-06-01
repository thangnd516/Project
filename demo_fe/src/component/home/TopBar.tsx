import { Link } from "react-router-dom";
import { User } from 'lucide-react';

// TopBar Component
export const TopBar = () => {
  return (
    <div className="bg-gray-100 py-2 text-sm text-white" style={{ backgroundColor: '#33a58e' }}>
      <div className="container mx-auto flex justify-between items-center" >
        <div className="text-white">
          Due to the COVID-19 pandemic, orders may be processed with a slight delay
        </div>
        <div className="flex items-center space-x-2">
          <a href="#" className="text-white hover:text-blue-600">About Us</a>
          <span className="text-white">|</span>
        <Link to="/blogs" className="text-white hover:text-blue-600">
            Blogs
          </Link>
          <span className="text-white">|</span>
          <a href="#" className="text-white hover:text-blue-600">Contact Us</a>
          <span className="text-white">|</span>
          <a href="#" className="text-white hover:text-blue-600">Help</a>
          <span className="text-white">|</span>
          <Link to="/fax" className="text-white hover:text-blue-600">
            Fax
          </Link>
          <span className="text-white">|</span>
          <a href="#" className="flex items-center text-white hover:text-blue-600">
            <User size={16} className="mr-1" />
            My Account
          </a>
        </div>
      </div>
    </div>
  );
};