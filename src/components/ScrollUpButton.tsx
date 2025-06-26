import { useEffect, useState } from 'react';

const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 500);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            onClick={scrollToTop}
            className={`
        fixed bottom-16 right-[30px]
        px-4 py-2 
        cursor-pointer
        transition-all
        animate-float
        font-bold
        z-50
        w-12 h-12
        ${isVisible ? 'block' : 'hidden'}
      `}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48">
                <circle cx="32" cy="32" r="30" fill="#129d42" />
                <path
                    d="M32 15L16 30.305h10.857V49h10.286V30.305H48L32 15z"
                    fill="white"
                />
            </svg>
        </div>
    );
};

export default ScrollUpButton;