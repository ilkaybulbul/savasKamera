import { useTranslation } from 'react-i18next';

export default function WhyUs() {
    const { t } = useTranslation();

    return (
        <section className="w-full min-h-screen flex items-center py-24 md:py-32 px-4 md:px-8 bg-white dark:bg-surface-dark" id="why-us">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 flex flex-col gap-8">
                        <div>
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">{t('whyUs.badge')}</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white leading-tight mb-4">{t('whyUs.heading')}</h2>
                        </div>
                        <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">{t('whyUs.desc')}</p>
                        <div className="grid sm:grid-cols-2 gap-4 mt-2">
                            {[
                                { icon: "location_on", title: t('whyUs.feat1.title'), desc: t('whyUs.feat1.desc') },
                                { icon: "bolt", title: t('whyUs.feat2.title'), desc: t('whyUs.feat2.desc') },
                                { icon: "smartphone", title: t('whyUs.feat3.title'), desc: t('whyUs.feat3.desc') },
                                { icon: "verified_user", title: t('whyUs.feat4.title'), desc: t('whyUs.feat4.desc') }
                            ].map((item, i) => (
                                <div key={i} className="cursor-pointer flex gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark border border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:bg-white/50 dark:hover:bg-slate-900/50 transition-all duration-300 hover:-translate-y-1">
                                    <div className="shrink-0 text-primary mt-1">
                                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-dark dark:text-white">{item.title}</h4>
                                        <p className="text-xs text-text-muted dark:text-gray-400 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full relative">
                        <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 bg-primary/10 rounded-3xl -z-10"></div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1 space-y-4 pt-12">
                                <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800">
                                    <div className="bg-cover bg-center h-64 w-full transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('/showcase/intercom.jpg')" }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                        <p className="text-white font-bold text-sm">{t('whyUs.img1')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 space-y-4">
                                <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800">
                                    <div className="bg-cover bg-center h-64 w-full transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('/showcase/plaza.jpg')" }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                        <p className="text-white font-bold text-sm">{t('whyUs.img2')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
