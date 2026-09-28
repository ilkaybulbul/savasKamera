import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Process() {
    const { t } = useTranslation();
    const [active, setActive] = useState(0);
    const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

    const steps = [
        { icon: 'person_search', title: t('process.step1.title'), desc: t('process.step1.desc') },
        { icon: 'engineering', title: t('process.step2.title'), desc: t('process.step2.desc') },
        { icon: 'support_agent', title: t('process.step3.title'), desc: t('process.step3.desc') },
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
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
