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
            className="flex h-11 items-center justify-center rounded-full border border-line px-4 text-sm font-semibold text-ink transition-colors hover:bg-surface"
            aria-label="Switch Language"
        >
            {i18n.language === 'tr' ? 'EN' : 'TR'}
        </button>
    );
}
