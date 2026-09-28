import { useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    // Re-renders only when the 300px threshold is crossed.
    useMotionValueEvent(scrollY, 'change', y => setIsVisible(y > 300));

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
                    className="fixed bottom-[88px] right-4 z-50 flex size-12 items-center justify-center rounded-full bg-accent text-accent-ink shadow-[0_2px_4px_rgb(10_11_31/0.12)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 lg:bottom-8 lg:right-8 lg:size-14"
                    aria-label="Back to top"
                >
                    <span className="material-symbols-outlined">arrow_upward</span>
                </button>
            )}
        </>
    );
}
