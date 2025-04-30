
import { User } from 'lucide-react';

// TopBar Component
export const TopBar = () => {
  return (
    <div className="bg-gray-100 py-2 text-sm"  style={{ backgroundColor: '#33a58e', color: 'white' }}>
      <div className="container mx-auto flex justify-between items-center"  style={{color: 'white' }} >
        <div className="text-gray-600">
          Due to the COVID-19 pandemic, orders may be processed with a slight delay
        </div>
        <div className="flex items-center space-x-2">
          <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-gray-600 hover:text-blue-600">Blog</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-gray-600 hover:text-blue-600">Help</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
            <User size={16} className="mr-1" />
            My Account
          </a>
        </div>
      </div>
    </div>
  );
};