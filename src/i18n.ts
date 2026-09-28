import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import tr from './locales/tr.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            tr: { translation: tr },
        },
        lng: 'tr', // Default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

// Keep <html lang> in sync so Turkish casing (i/İ) and screen readers follow the active language.
document.documentElement.lang = i18n.language;
i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
});

export default i18n;
