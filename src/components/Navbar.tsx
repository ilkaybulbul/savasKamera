import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import Logo from './Logo';

const links = [
    { href: '#services', key: 'nav.services' },
    { href: '#process', key: 'nav.process' },
    { href: '#why-us', key: 'nav.whyUs' },
    { href: '#reviews', key: 'nav.reviews' },
    { href: '#references', key: 'nav.references' },
];

const scrollToContact = () => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });

export default function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    // Escape closes the mobile menu.
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen]);

    return (
        <nav className="sticky top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur-md">
            <div className="mx-auto flex h-[72px] max-w-page items-center gap-2 px-4 sm:gap-3 lg:gap-8 lg:px-10">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-ink sm:w-14 lg:hidden"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label="Menu"
                >
                    <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
                </button>

                <a href="#" className="flex h-11 shrink-0 items-center text-ink" aria-label="SK Güvenlik">
                    <Logo />
                </a>

                <div className="hidden items-center gap-6 lg:flex">
                    {links.map(link => (
                        <a key={link.href} href={link.href} className="whitespace-nowrap py-2 text-[15px] font-medium text-ink transition-colors hover:text-ink-muted">
                            {t(link.key)}
                        </a>
                    ))}
                </div>

                <div className="ml-auto flex items-center gap-2">
                    {/* On small phones the theme switch lives in the menu to keep the bar on one line. */}
                    <div className="hidden sm:block">
                        <ThemeToggle />
                    </div>
                    <LanguageToggle />
                    <button onClick={scrollToContact} className="btn btn-ink ml-1 hidden lg:inline-flex">
                        {t('nav.freeDiscovery')}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div id="mobile-menu" className="animate-fade-in-down absolute left-0 top-full max-h-[calc(100dvh-72px)] w-full overflow-y-auto border-b border-line bg-canvas px-4 pb-6 pt-2 lg:hidden">
                    <div className="flex flex-col">
                        {links.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="t-display border-b border-line py-4 text-[36px] text-ink"
                            >
                                {t(link.key)}
                            </a>
                        ))}
                        <div className="mt-6 flex items-center gap-3">
                            <div className="sm:hidden">
                                <ThemeToggle />
                            </div>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    scrollToContact();
                                }}
                                className="btn btn-lg btn-ink flex-1"
                            >
                                {t('nav.freeDiscovery')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
