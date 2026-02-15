import { useTranslation } from 'react-i18next';

export default function Process() {
    const { t } = useTranslation();

    return (
        <section className="w-full min-h-screen flex items-center py-24 md:py-32 px-4 md:px-8 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800" id="process">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">{t('process.title')}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-white">{t('process.heading')}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 relative">
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 shadow-lg shadow-primary/20 z-0"></div>

                    {[
                        { icon: "person_search", step: "01", title: t('process.step1.title'), desc: t('process.step1.desc') },
                        { icon: "engineering", step: "02", title: t('process.step2.title'), desc: t('process.step2.desc') },
                        { icon: "support_agent", step: "03", title: t('process.step3.title'), desc: t('process.step3.desc') }
                    ].map((item, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center">
                            <div className="size-24 rounded-full bg-white dark:bg-surface-dark border-4 border-background-light dark:border-background-dark shadow-xl flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-4xl text-primary">{item.icon}</span>
                            </div>
                            <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm w-full relative overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                                <span className="text-5xl font-black text-slate-100 dark:text-slate-800 absolute top-20 right-10 -z-10">{item.step}</span>
                                <h3 className="text-xl font-bold text-text-dark dark:text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-text-muted dark:text-gray-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
