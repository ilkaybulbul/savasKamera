import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const districts = ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Gölbaşı", "Altındağ", "Pursaklar"];

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="w-full bg-night text-on-night">
            {/* Bottom padding keeps the last row clear of the fixed call / WhatsApp / back-to-top buttons. */}
            <div className="mx-auto max-w-page px-4 pb-44 pt-16 lg:px-10 lg:pt-24">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
                    <div className="flex flex-col gap-5 lg:col-span-4">
                        <Logo iconClassName="text-accent" />
                        <p className="max-w-[40ch] text-[15px] leading-6 text-on-night/70">{t('footer.desc')}</p>
                    </div>
                    <div className="lg:col-span-2">
                        <h4 className="t-display mb-5 text-[28px]">{t('footer.links')}</h4>
                        <ul className="flex flex-col gap-3 text-[15px] text-on-night/70">
                            <li><a className="transition-colors hover:text-on-night" href="#">{t('nav.freeDiscovery')}</a></li>
                            <li><a className="transition-colors hover:text-on-night" href="#services">{t('nav.services')}</a></li>
                            <li><a className="transition-colors hover:text-on-night" href="#process">{t('nav.process')}</a></li>
                            <li><a className="transition-colors hover:text-on-night" href="#reviews">{t('nav.reviews')}</a></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-3">
                        <h4 className="t-display mb-5 text-[28px]">{t('footer.areas')}</h4>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-[15px] text-on-night/70">
                            {districts.map(district => (
                                <li key={district}><a className="transition-colors hover:text-on-night" href="#">{district}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-3">
                        <h4 className="t-display mb-5 text-[28px]">{t('footer.contact')}</h4>
                        <ul className="flex flex-col gap-4 text-[15px] text-on-night/70">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined shrink-0 text-[20px]">location_on</span>
                                <span>Kızılay Mah. Atatürk Bulvarı No:123, Çankaya/Ankara</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined shrink-0 text-[20px]">phone</span>
                                <a href="tel:05405910619" className="font-semibold text-on-night">0540 591 06 19</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined shrink-0 text-[20px]">mail</span>
                                <span className="break-all">bilgi@ankaraguvenlik.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Full-width wordmark. 223 is the size at which the condensed text is naturally ~1000 wide,
                    so textLength only corrects rounding instead of stretching the letters. */}
                <svg viewBox="0 0 1000 176" className="mt-16 block w-full lg:mt-24" aria-hidden="true">
                    <text
                        x="0"
                        y="170"
                        textLength="1000"
                        lengthAdjust="spacingAndGlyphs"
                        className="t-display"
                        style={{ fontSize: 223 }}
                        fill="currentColor"
                    >
                        SK Güvenlik
                    </text>
                </svg>

                <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-on-night/15 pt-8 text-sm text-on-night/60 md:flex-row md:items-center">
                    <div>{t('footer.rights')}</div>
                    <div className="flex gap-6">
                        <a className="transition-colors hover:text-on-night" href="#">{t('footer.privacy')}</a>
                        <a className="transition-colors hover:text-on-night" href="#">{t('footer.terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
