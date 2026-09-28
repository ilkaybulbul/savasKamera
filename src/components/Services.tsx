import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { asset } from '@/lib/utils';

const items = [
    // pos = object-position, keeps the camera / subject inside the portrait crop
    { key: 'cctv', img: asset("/photos/cctv-wall-camera.webp"), pos: '62% 50%' },
    { key: 'smart', img: asset("/photos/smart-home-phone.webp"), pos: '45% 50%' },
    { key: 'maintenance', img: asset("/photos/maintenance-kit.webp"), pos: '42% 50%' },
    { key: 'monitoring', img: asset("/photos/monitoring-lens.webp"), pos: '53% 50%' },
];

const NAV_HEIGHT = 72;

export default function Services() {
    const { t } = useTranslation();
    const trackRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);

    // Scroll through the tall track drives which service is "lit". State only changes at item boundaries.
    const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });
    useMotionValueEvent(scrollYProgress, 'change', v => {
        setActive(Math.min(items.length - 1, Math.max(0, Math.floor(v * items.length))));
    });

    const jumpTo = (i: number) => {
        const el = trackRef.current;
        if (!el) return;
        // Inverse of useScroll's progress: p = (scrollY - trackTop) / (trackHeight - viewport).
        const top = el.getBoundingClientRect().top + window.scrollY;
        const travel = el.offsetHeight - window.innerHeight;
        window.scrollTo({ top: top + travel * ((i + 0.5) / items.length), behavior: 'smooth' });
    };

    return (
        <section className="w-full bg-canvas pt-16 lg:pt-24" id="services">
            <header className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center">
                <span className="chip bg-surface text-ink">{t('services.title')}</span>
                <h2 className="t-display text-[clamp(2.75rem,6vw,5.25rem)] text-ink">{t('services.heading')}</h2>
                <p className="t-lead max-w-[56ch]">{t('services.description')}</p>
            </header>

            {/* Desktop: pinned media + headline list */}
            <div ref={trackRef} className="relative mt-8 hidden lg:block" style={{ height: `${items.length * 70 + 30}vh` }}>
                <div className="sticky flex items-center" style={{ top: NAV_HEIGHT, height: `calc(100dvh - ${NAV_HEIGHT}px)` }}>
                    <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[minmax(0,5fr)_minmax(0,6fr)] items-center gap-16 px-10">
                        <div className="relative aspect-[4/5] max-h-[calc(100dvh-160px)] w-full overflow-hidden rounded-card bg-surface">
                            {items.map((item, i) => (
                                <img
                                    key={item.key}
                                    src={item.img}
                                    alt={i === active ? t(`services.${item.key}.title`) : ''}
                                    aria-hidden={i !== active}
                                    loading="lazy"
                                    style={{ objectPosition: item.pos }}
                                    className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out ${i === active ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0'}`}
                                />
                            ))}
                        </div>

                        <ol className="flex flex-col gap-5">
                            {items.map((item, i) => (
                                <li key={item.key}>
                                    <h3>
                                        <button
                                            onClick={() => jumpTo(i)}
                                            className={`t-display py-1 text-left text-[clamp(2.25rem,3.3vw,3.25rem)] transition-colors duration-300 ${i === active ? 'text-ink' : 'text-ghost hover:text-ink-muted'}`}
                                            aria-current={i === active ? 'true' : undefined}
                                        >
                                            {t(`services.${item.key}.title`)}
                                        </button>
                                    </h3>
                                    <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${i === active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <p className="max-w-[52ch] overflow-hidden text-base leading-7 text-ink-soft">
                                            <span className="block pt-3">{t(`services.${item.key}.desc`)}</span>
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

            {/* Phones and tablets: stacked cards, everything visible */}
            <ol className="mx-auto mt-12 grid max-w-2xl gap-12 px-4 lg:hidden">
                {items.map(item => (
                    <li key={item.key} className="flex flex-col gap-5">
                        <img
                            src={item.img}
                            alt={t(`services.${item.key}.title`)}
                            loading="lazy"
                            style={{ objectPosition: item.pos }}
                            className="aspect-[4/3] w-full rounded-card object-cover"
                        />
                        <h3 className="t-display text-[40px] text-ink">{t(`services.${item.key}.title`)}</h3>
                        <p className="text-base leading-7 text-ink-soft">{t(`services.${item.key}.desc`)}</p>
                    </li>
                ))}
            </ol>

            {/* Call to action */}
            <div className="px-4 pb-4 pt-20 lg:px-10 lg:pt-16">
                <div className="mx-auto grid max-w-page items-center gap-10 overflow-hidden rounded-card bg-accent p-8 text-accent-ink sm:p-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:rounded-hero lg:p-16">
                    <div className="flex flex-col gap-6">
                        <span className="chip bg-canvas text-ink">
                            <span className="material-symbols-outlined text-[18px]">engineering</span>
                            {t('hero.fastInstall')}
                        </span>
                        <h3 className="t-display text-[clamp(2.5rem,5vw,4.5rem)]">{t('services.cta.title')}</h3>
                        <p className="max-w-[48ch] text-lg leading-7 text-accent-ink/80">{t('services.cta.desc')}</p>
                        <button
                            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn btn-lg w-full bg-[#0A0B1F] text-white hover:bg-[#0A0B1F]/85 sm:w-fit"
                        >
                            {t('services.cta.button')}
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </button>
                    </div>
                    <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-card">
                        <img
                            src={asset("/photos/cta-dome-camera.webp")}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
