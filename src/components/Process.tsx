import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { asset } from '@/lib/utils';

export default function Process() {
    const { t } = useTranslation();
    const [active, setActive] = useState(0);
    const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

    const steps = [
        { icon: 'person_search', title: t('process.step1.title'), desc: t('process.step1.desc'), img: asset('/photos/process-site-survey.webp'), pos: '40% 45%' },
        { icon: 'engineering', title: t('process.step2.title'), desc: t('process.step2.desc'), img: asset('/photos/process-clean-install.webp'), pos: '50% 50%' },
        { icon: 'support_agent', title: t('process.step3.title'), desc: t('process.step3.desc'), img: asset('/photos/process-intercom-use.webp'), pos: '50% 45%' },
    ];

    // A step lights up while it crosses the middle band of the viewport.
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
                });
            },
            { rootMargin: '-45% 0px -45% 0px' }
        );
        stepRefs.current.forEach(el => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full bg-canvas px-4 py-20 lg:px-10 lg:py-32" id="process">
            <header className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
                <span className="chip bg-surface text-ink">{t('process.title')}</span>
                <h2 className="t-display text-[clamp(2.5rem,5vw,4.5rem)] text-ink">{t('process.heading')}</h2>
            </header>

            <ol className="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-14 text-center lg:mt-24 lg:gap-20">
                {steps.map((step, i) => {
                    const isActive = i === active;
                    return (
                        <li
                            key={step.icon}
                            ref={el => { stepRefs.current[i] = el; }}
                            data-index={i}
                            className="flex flex-col items-center gap-5"
                        >
                            <span className={`flex size-14 items-center justify-center rounded-full transition-colors duration-500 ${isActive ? 'bg-accent text-accent-ink' : 'bg-surface text-ink-muted'}`}>
                                <span className="material-symbols-outlined text-[28px]">{step.icon}</span>
                            </span>
                            <h3 className={`t-display text-[clamp(2.5rem,6.4vw,6rem)] transition-colors duration-500 ${isActive ? 'text-ink' : 'text-ghost'}`}>
                                {step.title}
                            </h3>
                            <p className={`max-w-[56ch] text-lg leading-7 transition-colors duration-500 ${isActive ? 'text-ink-soft' : 'text-ink-muted/60'}`}>
                                {step.desc}
                            </p>
                            {/* Inactive steps sit in black and white, like a camera on night mode; the active one is in colour. */}
                            <figure className={`mt-4 w-full max-w-3xl overflow-hidden rounded-card transition-[transform,opacity,filter] duration-700 ease-out ${isActive ? 'scale-100 opacity-100 grayscale-0' : 'scale-[0.96] opacity-70 grayscale'}`}>
                                <img
                                    src={step.img}
                                    alt={step.title}
                                    loading="lazy"
                                    style={{ objectPosition: step.pos }}
                                    className="aspect-[4/3] w-full object-cover sm:aspect-[2/1]"
                                />
                            </figure>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
