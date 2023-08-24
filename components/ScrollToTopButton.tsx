"use client"
import { useTheme } from '@/context/theme-context';
import { useState, useEffect } from 'react';
import { BsArrowUpCircle, BsArrowUpCircleFill } from 'react-icons/bs';
// import styles from "./../app/ScrollToTopButton.module.css";
const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { theme, toggleTheme } = useTheme();


    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`fixed bottom-4 left-4 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:border-white dark:bg-gray-950 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}
            onClick={scrollToTop}
        >
            {theme === "light" ? <BsArrowUpCircle /> : <BsArrowUpCircleFill />}

            {/* Scroll To Top */}
        </button>

    );
};

export default ScrollToTopButton;
