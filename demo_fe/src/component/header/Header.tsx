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
    <header className="header-wrap py-2 bg-white shadow-md">
      <div className="header-container container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="">
            <img className='image-logo' src={health} alt="" />
          </a>

          {/* Search */}
          <div style={{display: "flex",justifyContent: "center"}} className="flex-1 mx-8">
            <SearchDropdown categories={categories} onSearch={handleSearch} />
          </div>

          {/* Contact and Cart */}
          <div className="flex items-center space-x-6">
            <div className='contact-header-wrap'>
              <svg style={{ color: "rgb(51, 165, 142)", height: "2.55rem" }} className="thebase-svg-icon thebase-phone-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><title>phone</title>
                <path d="M-546,286c.75-5.91,1.16-11.9,2.32-17.73a74,74,0,0,1,19.77-38c13.74-14.05,27-28.7,41.8-41.57,22.53-19.59,47-19.48,68.67.84,23.08,21.62,45.2,44.34,66.77,67.49,16,17.19,15.86,43.56.31,61.24-11.53,13.12-24.23,25.21-36.61,37.56-2.39,2.39-2.86,3.94-1.29,7.11,12.4,25.09,29.92,46.41,48.85,66.66,19.42,20.77,40.78,39.31,64.8,54.63,6.84,4.36,14.16,8,21.76,12.19,9.33-9.44,18.18-18.95,27.65-27.8,6.89-6.43,14-13.11,22.09-17.67a43.51,43.51,0,0,1,52,6.4c23.63,22.76,46.93,45.91,69.42,69.79,16.72,17.75,16.85,44.61.7,63-14.17,16.12-29.33,31.42-44.75,46.36-11.78,11.42-26.57,17.49-42.9,19.6A22.08,22.08,0,0,0-168,657h-19c-1.1-.3-2.19-.68-3.3-.89-10.79-2-21.76-3.21-32.33-6-37.54-9.84-71.78-27.29-104.33-47.89q-122.4-77.47-188.25-206.79c-12.34-24.21-22-49.55-27.29-76.32-1.7-8.6-2.36-17.41-3.5-26.13Zm29.09,4.38c1.13,8.23,1.71,16.58,3.48,24.67,7.76,35.5,22.68,68.16,41.63,98.89C-421.69,495.2-355.07,558.8-269,601.21c26.69,13.15,54.22,23.8,84.26,26.41,18.41,1.59,34.6-2.8,47.73-16.52,10.83-11.31,21.89-22.39,32.82-33.6a57.45,57.45,0,0,0,4.61-5.26c7-9.11,7-18.67-.77-27.21s-16.25-16.72-24.48-25c-12.82-12.87-25.6-25.78-38.57-38.48-9.38-9.18-19.39-9.22-29.24-.5-1.5,1.32-2.92,2.74-4.33,4.15-11.44,11.41-22.81,22.9-34.33,34.24-8.27,8.13-17.41,9.64-27.4,4.61-7-3.52-14-7.06-20.69-11.05-30.15-18-56.38-40.72-80.08-66.46-21.17-23-40.41-47.37-53.37-76.16-6.21-13.81-4.7-21.82,6.1-32.28,11.49-11.12,23-22.2,34.18-33.67,11.76-12.09,11.58-21.6-.23-33.71-9.3-9.54-18.83-18.87-28.24-28.31-10.24-10.25-20.39-20.61-30.74-30.76s-20.85-10.38-31.78-.71c-1.24,1.1-2.42,2.29-3.59,3.46-10.26,10.25-20.29,20.73-30.81,30.69C-511,257.48-517.18,272.39-516.91,290.38Z" transform="translate(546 -145)"></path><path d="M-259,145c11.55,3,23.22,5.58,34.61,9.07a267.28,267.28,0,0,1,99.3,55.77,275.68,275.68,0,0,1,71.43,97.44A284.76,284.76,0,0,1-35,368.69,30,30,0,0,0-34,372v3c-.12.11-.31.2-.36.34-3.1,8.58-8.12,12.77-14.82,12.34-8.14-.52-12.93-5.19-14.75-14.93-6.68-35.89-20.35-68.83-41.7-98.44-27.94-38.73-63.76-67.88-108.27-85.42-15.53-6.12-32-9.8-48.22-14.21-9.24-2.52-14-6.33-14.85-13.23-.85-7.19,2.4-12.07,11-16.45Z" transform="translate(546 -145)"></path>
                <path d="M-263.48,238c6.48,1.74,16.21,3.54,25.33,6.94,60.53,22.6,97.41,65.72,110.71,129,1.74,8.3-2.8,15.75-10.61,17.8-7.58,2-15.2-2.58-17.71-10.74-3.42-11.1-5.57-22.77-10.36-33.24-20.16-44-54.35-70.89-101.87-80.64-8.73-1.8-13.35-7.12-13.17-14.95S-274.67,238-263.48,238Z" transform="translate(546 -145)"></path>
              </svg>
              <div className='contact-content-header'>
                <div className="text-xs text-gray-500">Need help? </div>
                <div className="font-semibold">+84 782 391 943</div>
              </div>
            </div>

            <div className="cart-header-wrap">
              <a href="#" className="">
                <ShoppingCart size={28} className="cart-icon-header" />
              </a>
              <div className='cart-content-header'>
                <span>Cart</span>
                <span>$35.00</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};