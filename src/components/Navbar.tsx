import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <div className="flex items-center gap-3">
                        <div className="size-8 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">shield_lock</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-text-dark dark:text-white">
                            SK Güvenlik
                        </span>
                    </div>
                    <div className="hidden md:flex flex-1 justify-end gap-6 items-center">
                        <div className="flex gap-6">
                            <a href="#services" className="text-sm font-medium text-navy-900 dark:text-gray-200 hover:text-primary transition-colors">{t('nav.services')}</a>
                            <a href="#process" className="text-sm font-medium text-navy-900 dark:text-gray-200 hover:text-primary transition-colors">{t('nav.process')}</a>
                            <a href="#why-us" className="text-sm font-medium text-navy-900 dark:text-gray-200 hover:text-primary transition-colors">{t('nav.whyUs')}</a>
                            <a href="#reviews" className="text-sm font-medium text-navy-900 dark:text-gray-200 hover:text-primary transition-colors">{t('nav.reviews')}</a>
                            <a href="#references" className="text-sm font-medium text-navy-900 dark:text-gray-200 hover:text-primary transition-colors">{t('nav.references')}</a>
                        </div>
                        <div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-700 pl-6">
                            <ThemeToggle />
                            <LanguageToggle />
                            <button
                                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 ml-2"
                            >
                                {t('nav.freeDiscovery')}
                            </button>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <LanguageToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-navy-900 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        >
                            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-gray-200 dark:border-slate-800 shadow-xl z-40 p-4 md:hidden animate-fade-in-down">
                    <div className="flex flex-col gap-4">
                        <a href="#services" onClick={() => setIsOpen(false)} className="text-base font-medium text-navy-900 dark:text-gray-200 hover:text-primary p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">{t('nav.services')}</a>
                        <a href="#process" onClick={() => setIsOpen(false)} className="text-base font-medium text-navy-900 dark:text-gray-200 hover:text-primary p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">{t('nav.process')}</a>
                        <a href="#why-us" onClick={() => setIsOpen(false)} className="text-base font-medium text-navy-900 dark:text-gray-200 hover:text-primary p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">{t('nav.whyUs')}</a>
                        <a href="#reviews" onClick={() => setIsOpen(false)} className="text-base font-medium text-navy-900 dark:text-gray-200 hover:text-primary p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">{t('nav.reviews')}</a>
                        <a href="#references" onClick={() => setIsOpen(false)} className="text-base font-medium text-navy-900 dark:text-gray-200 hover:text-primary p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">{t('nav.references')}</a>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-5 py-4 rounded-lg w-full shadow-md"
                        >
                            {t('nav.freeDiscovery')}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
