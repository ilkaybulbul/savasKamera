import { useTranslation } from 'react-i18next';

export default function Partners() {
    const { t } = useTranslation();

    const partners = [
        "Audio", "Dahua", "Hikvision", "X5Tech", "MXCam", "UNV", "FIBRA", "Netelsan", "Neutron",

    ];

    // Triple the list to ensure seamless looping functionality without gaps
    const marqueePartners = [...partners, ...partners, ...partners];

    return (
        <section className="w-full py-24 md:py-32 px-4 md:px-8 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 overflow-hidden" id="partners">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
                        {t('partners.title') || 'İş Ortaklarımız'}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
                        {t('partners.heading') || 'Güvenilir Markalarla Çalışıyoruz'}
                    </h2>
                    <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t('partners.desc') || 'Dünya çapında tanınmış güvenlik kamera markalarının yetkili satıcısı ve kurulum ortağıyız'}
                    </p>
                </div>

                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee whitespace-nowrap py-12 flex items-center gap-16 md:gap-24">
                        {marqueePartners.map((partner, index) => (
                            <span
                                key={index}
                                className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-navy-900/10 to-navy-900/30 dark:from-white/10 dark:to-white/30 hover:from-primary hover:to-primary dark:hover:from-white dark:hover:to-white transition-all duration-700 cursor-default select-none uppercase hover:scale-110 transform"
                            >
                                {partner}
                            </span>
                        ))}
                    </div>

                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12 flex items-center gap-16 md:gap-24 ml-16 md:ml-24">
                        {marqueePartners.map((partner, index) => (
                            <span
                                key={`clone-${index}`}
                                className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-navy-900/10 to-navy-900/30 dark:from-white/10 dark:to-white/30 hover:from-primary hover:to-primary dark:hover:from-white dark:hover:to-white transition-all duration-700 cursor-default select-none uppercase hover:scale-110 transform"
                            >
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>

                <div className="mt-12 text-center relative z-20">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/20 transition-colors cursor-default">
                        <span className="material-symbols-outlined text-primary material-symbols-filled">verified</span>
                        <span className="text-sm font-bold text-primary">
                            Tüm Markalar İçin Yetkili Satış ve Servis Noktası
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
