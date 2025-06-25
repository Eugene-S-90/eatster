import { useEffect, useState } from 'react';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-16 right-[30px]
        bg-[#007BFF] text-white
        px-4 py-2 
        cursor-pointer
        rounded-full
        transition-all
        animate-float
        ${isVisible ? 'block' : 'hidden'}
      `}
    >
      Scroll Up
    </button>
  );
};

export default ScrollUpButton;