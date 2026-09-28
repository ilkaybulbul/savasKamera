import { useState } from 'react';
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

    return (
        <nav className="sticky top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur-md">
            <div className="mx-auto flex h-[72px] max-w-page items-center gap-3 px-4 lg:gap-8 lg:px-10">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-accent-ink lg:hidden"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label="Menu"
                >
                    <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
                </button>

                <a href="#" className="shrink-0 text-ink" aria-label="SK Güvenlik">
                    <Logo />
                </a>

                <div className="hidden items-center gap-6 lg:flex">
                    {links.map(link => (
                        <a key={link.href} href={link.href} className="whitespace-nowrap text-[15px] font-medium text-ink transition-colors hover:text-ink-muted">
                            {t(link.key)}
                        </a>
                    ))}
                </div>

                <div className="ml-auto flex items-center gap-2">
                    <ThemeToggle />
                    <LanguageToggle />
                    <button onClick={scrollToContact} className="btn btn-ink ml-1 hidden lg:inline-flex">
                        {t('nav.freeDiscovery')}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div id="mobile-menu" className="animate-fade-in-down absolute left-0 top-full w-full border-b border-line bg-canvas px-4 pb-6 pt-2 lg:hidden">
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
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                scrollToContact();
                            }}
                            className="btn btn-lg btn-ink mt-6 w-full"
                        >
                            {t('nav.freeDiscovery')}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
