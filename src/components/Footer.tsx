import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="w-full pt-16 pb-8 px-4 md:px-8 bg-background-light dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="size-10 text-primary flex items-center justify-center bg-white dark:bg-surface-dark rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
                            <span className="material-symbols-outlined text-3xl">shield_lock</span>
                        </div>
                        <span className="text-xl font-bold text-text-dark dark:text-white leading-tight">Ankara Güvenlik<br />Sistemleri</span>
                    </div>
                    <p className="text-sm text-text-muted dark:text-gray-400">{t('footer.desc')}</p>
                </div>
                <div>
                    <h4 className="font-bold text-text-dark dark:text-white mb-6">{t('footer.links')}</h4>
                    <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-gray-400">
                        <li><a className="hover:text-primary transition-colors" href="#">{t('nav.freeDiscovery')}</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#services">{t('nav.services')}</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#process">{t('nav.process')}</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#reviews">{t('nav.reviews')}</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-navy-900 dark:text-white mb-6">{t('footer.areas')}</h4>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-3 text-sm text-slate-600 dark:text-gray-400">
                        {["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Gölbaşı", "Altındağ", "Pursaklar"].map(district => (
                            <li key={district}><a className="hover:text-primary transition-colors flex items-center gap-1" href="#"><span className="size-1.5 rounded-full bg-primary/50"></span>{district}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-navy-900 dark:text-white mb-6">{t('footer.contact')}</h4>
                    <ul className="flex flex-col gap-4 text-sm text-slate-600 dark:text-gray-400">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                            <span>Kızılay Mah. Atatürk Bulvarı No:123, Çankaya/Ankara</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary shrink-0">phone</span>
                            <span className="font-bold text-navy-900 dark:text-white">0540 591 06 19</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary shrink-0">mail</span>
                            <span>bilgi@ankaraguvenlik.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-slate-500 dark:text-gray-500">
                    {t('footer.rights')}
                </div>
                <div className="flex gap-6 text-sm text-slate-500 dark:text-gray-400">
                    <a className="hover:text-primary transition-colors" href="#">{t('footer.privacy')}</a>
                    <a className="hover:text-primary transition-colors" href="#">{t('footer.terms')}</a>
                </div>
            </div>
        </footer>
    );
}
