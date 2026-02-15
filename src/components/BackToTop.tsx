import { useState, useEffect } from 'react';

export default function BackToTop() {
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
                    className="fixed bottom-8 right-8 size-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark hover:scale-110 active:scale-95 transition-all duration-200 z-50 flex items-center justify-center"
                    aria-label="Back to top"
                >
                    <span className="material-symbols-outlined">arrow_upward</span>
                </button>
            )}
        </>
    );
}
