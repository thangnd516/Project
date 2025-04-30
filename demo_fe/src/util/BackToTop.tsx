
import React, { useState, useEffect } from 'react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Hiển thị nút khi cuộn xuống 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Thiết lập sự kiện cuộn
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-600 focus:outline-none"
          aria-label="Cuộn lên đầu trang"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </>
  );
}

export default BackToTop;
