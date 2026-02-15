import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle Theme"
        >
            <span className="material-symbols-outlined text-xl leading-none">
                {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </span>
        </button>
    );
}
