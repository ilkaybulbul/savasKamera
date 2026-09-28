import { useTranslation } from 'react-i18next';

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
    const { t } = useTranslation();

    const trust = [
        { icon: 'verified', label: t('hero.licensed') },
        { icon: 'shield', label: t('hero.warranty') },
        { icon: 'bolt', label: t('hero.fastInstall') },
    ];

    return (
        <section className="w-full px-4 pt-4 lg:px-10 lg:pt-6">
            <div className="relative mx-auto flex min-h-[640px] max-w-page flex-col justify-end overflow-hidden rounded-card bg-night lg:h-[clamp(560px,calc(100dvh-72px-170px),740px)] lg:min-h-0 lg:rounded-hero">
                <img
                    src="/showcase/night-cam.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-[70%_50%]"
                    fetchPriority="high"
                />
                {/* Scrim only where the copy sits: bottom on phones, left side on desktop. */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/10 lg:bg-gradient-to-r lg:from-black/75 lg:via-black/35 lg:to-transparent" />

                <div className="relative z-10 flex flex-col gap-6 p-6 pb-8 sm:p-10 lg:max-w-[720px] lg:p-14">
                    <span className="chip bg-white/15 text-white backdrop-blur-md">
                        {t('hero.badge')}
                    </span>
                    <h1 className="t-display text-[clamp(3.5rem,8vw,7rem)] text-white">
                        <span className="rise" style={{ animationDelay: '0.05s' }}>{t('hero.titleStart')}</span>{' '}
                        <span className="rise" style={{ animationDelay: '0.18s' }}>{t('hero.titleEnd')}</span>
                    </h1>
                    <p className="max-w-[46ch] text-lg leading-7 text-white/85 md:text-xl md:leading-8">
                        {t('hero.description')}
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <button onClick={() => scrollTo('contact-form')} className="btn btn-lg btn-accent">
                            {t('hero.ctaPrimary')}
                        </button>
                        <button
                            onClick={() => scrollTo('references')}
                            className="btn btn-lg border border-white/50 text-white backdrop-blur-sm hover:bg-white/10"
                        >
                            {t('hero.ctaSecondary')}
                        </button>
                    </div>
                </div>

                {/* Status plates, desktop only */}
                <div className="absolute bottom-10 right-10 z-10 hidden flex-col gap-3 xl:flex">
                    <div className="flex min-w-[240px] items-center gap-3 rounded-plate bg-canvas px-4 py-3 text-ink">
                        <span className="flex size-10 items-center justify-center rounded-full bg-surface">
                            <span className="material-symbols-outlined text-[22px]">videocam</span>
                        </span>
                        <div>
                            <p className="text-sm text-ink-muted">{t('card.resolution')}</p>
                            <p className="font-semibold">{t('card.resolutionValue')}</p>
                        </div>
                    </div>
                    <div className="flex min-w-[240px] items-center gap-3 rounded-plate bg-canvas px-4 py-3 text-ink">
                        <span className="relative flex size-10 items-center justify-center rounded-full bg-mint text-accent-ink">
                            <span className="material-symbols-outlined text-[22px]">security</span>
                            <span className="absolute right-0 top-0 flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E5484D] opacity-60" />
                                <span className="relative inline-flex size-3 rounded-full border-2 border-canvas bg-[#E5484D]" />
                            </span>
                        </span>
                        <div>
                            <p className="text-sm text-ink-muted">{t('card.systemStatus')}</p>
                            <p className="font-semibold">{t('card.systemStatusValue')}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust row */}
            <ul className="mx-auto grid max-w-page grid-cols-1 gap-4 px-2 py-8 md:grid-cols-3 lg:px-4 lg:py-12">
                {trust.map(item => (
                    <li key={item.icon} className="flex items-center gap-4 md:justify-center">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-surface text-ink">
                            <span className="material-symbols-outlined material-symbols-filled text-[24px]">{item.icon}</span>
                        </span>
                        <span className="t-display whitespace-nowrap text-[32px] text-ink md:text-[26px] lg:text-[36px] xl:text-[44px]">{item.label}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
