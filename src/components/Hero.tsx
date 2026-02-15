import { useTranslation } from 'react-i18next';
import { BlurText } from "@/components/ui/blur-text";
import { DotGrid } from "@/components/ui/dot-grid";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="w-full py-20 lg:py-32 px-4 md:px-8 lg:px-16 flex justify-center bg-gradient-to-b from-white to-background-light dark:from-background-dark dark:to-background-dark relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <DotGrid
                    dotColor="#94a3b8"
                    gridGap={30}
                    dotSize={1.5}
                    className="opacity-40"
                />
            </div>
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                <div className="flex flex-col gap-8 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit border border-primary/20">
                        <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{t('hero.badge')}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-navy-900 dark:text-white">
                        <BlurText
                            text={t('hero.titleStart')}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#60a5fa] block mb-6 py-2"
                            delay={0.2}
                        />
                        <BlurText
                            text={t('hero.titleEnd')}
                            className="block"
                            delay={0.4}
                        />
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-lg leading-relaxed">
                        {t('hero.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-primary hover:bg-primary-dark text-white text-base font-bold px-8 py-4 rounded-xl shadow-xl shadow-primary/25 transition-transform hover:-translate-y-1"
                        >
                            {t('hero.ctaPrimary')}
                        </button>
                        <button
                            onClick={() => document.getElementById('references')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors font-semibold text-navy-900 dark:text-white bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                        >
                            <span className="material-symbols-outlined text-primary">grid_view</span>
                            {t('hero.ctaSecondary')}
                        </button>
                    </div>
                    <div className="flex items-center gap-6 mt-2 text-sm text-slate-500 dark:text-gray-400 font-medium border-t border-slate-200 dark:border-slate-800 pt-6">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary material-symbols-filled">verified</span>
                            <span>{t('hero.licensed')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary material-symbols-filled">shield</span>
                            <span>{t('hero.warranty')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary material-symbols-filled">bolt</span>
                            <span>{t('hero.fastInstall')}</span>
                        </div>
                    </div>
                </div>
                <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2 group ring-1 ring-slate-900/5 dark:ring-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent z-10"></div>
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" data-alt="Modern sleek white security camera mounted on a clean wall" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWzLVp-ONIXChQEZheEpcmYz_85KDPtLbV9QSKltn8RFUerOZ0W5gj-HHAi37KBwRo-DRO3n9Z_5pv7PRlmFo5H63xVahA0ulw5YMe7WqIJ42ncxiREZs5s4BymEawSBBeZhTSDRG9QclXXD4Oz855G9N5ig6ZjDZM8Wyhaz8SM3OhqKWiNRBJWJCGCM6gIntYEAZfuTthRbuMqvakhkLjfvv6d3FqCNfrGiv_qbWQbfyPLa5t-8cDWKDLkM8Q9xJtJMqibYB7sg')" }}>
                    </div>
                    <div className="absolute top-6 right-6 z-20 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-3 animate-float">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-primary">
                            <span className="material-symbols-outlined">videocam</span>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider">{t('card.resolution')}</p>
                            <p className="text-sm font-bold text-navy-900 dark:text-white">{t('card.resolutionValue')}</p>
                        </div>
                    </div>
                    <div className="absolute bottom-6 left-6 z-20 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 min-w-[200px]">
                        <div className="bg-green-100 dark:bg-green-900/30 p-2.5 rounded-xl text-green-600 dark:text-green-400 relative">
                            <span className="absolute top-0 right-0 -mt-1 -mr-1 size-3 bg-green-500 border-2 border-white dark:border-background-dark rounded-full animate-ping"></span>
                            <span className="absolute top-0 right-0 -mt-1 -mr-1 size-3 bg-green-500 border-2 border-white dark:border-background-dark rounded-full"></span>
                            <span className="material-symbols-outlined">security</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wide">{t('card.systemStatus')}</p>
                            <p className="text-base font-bold text-navy-900 dark:text-white">{t('card.systemStatusValue')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
