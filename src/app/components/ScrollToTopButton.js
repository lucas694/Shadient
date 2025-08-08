'use client';

import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

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
          className="fixed bottom-8 animate-bounce right-8 w-12 h-12 bg-transparent border border-[#FFA800] text-[#FFA800] font-semibold rounded-full hover:bg-[#FFA800] hover:text-gray-200 transition duration-500 cursor-pointer z-50 flex items-center justify-center"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
