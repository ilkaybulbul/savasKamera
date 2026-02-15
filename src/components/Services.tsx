import { useTranslation } from 'react-i18next';

const ServiceCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
    <div className="group bg-background-light dark:bg-background-dark border border-[#e2e8e8] dark:border-[#1e3a3a] p-8 rounded-2xl hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
        <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-4xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
);

export default function Services() {
    const { t } = useTranslation();

    return (
        <section className="w-full min-h-screen flex items-center py-24 md:py-32 px-4 md:px-8 bg-white dark:bg-surface-dark" id="services">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="text-center max-w-2xl mb-16">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">{t('services.title')}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">{t('services.heading')}</h2>
                    <p className="text-slate-600 dark:text-gray-300">{t('services.description')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    <ServiceCard icon="videocam" title={t('services.cctv.title')} desc={t('services.cctv.desc')} />
                    <ServiceCard icon="home_iot_device" title={t('services.smart.title')} desc={t('services.smart.desc')} />
                    <ServiceCard icon="build_circle" title={t('services.maintenance.title')} desc={t('services.maintenance.desc')} />
                    <ServiceCard icon="visibility" title={t('services.monitoring.title')} desc={t('services.monitoring.desc')} />
                </div>

                <div className="mt-20 w-full rounded-3xl overflow-hidden relative min-h-[400px] flex items-center group shadow-2xl">
                    <div className="absolute inset-0 bg-cover bg-top-5px transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('/showcase/villa-cam.jpg')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-transparent p-8 md:p-12 flex flex-col justify-center">
                        <div className="max-w-2xl relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 w-fit border border-primary/30 mb-6">
                                <span className="material-symbols-outlined text-primary text-sm">engineering</span>
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">{t('hero.fastInstall')}</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{t('services.cta.title')}</h3>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">{t('services.cta.desc')}</p>
                            <button
                                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-primary hover:bg-primary-dark text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/25 transition-all hover:translate-x-1 inline-flex items-center gap-2"
                            >
                                <span>{t('services.cta.button')}</span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
