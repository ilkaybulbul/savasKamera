import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'tr' ? 'en' : 'tr';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold text-navy-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            aria-label="Switch Language"
        >
            {i18n.language === 'tr' ? 'EN' : 'TR'}
        </button>
    );
}
