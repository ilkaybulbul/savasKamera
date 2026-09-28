import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="flex size-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface"
            aria-label="Toggle Theme"
        >
            <span className="material-symbols-outlined text-[22px] leading-none">
                {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </span>
        </button>
    );
}
