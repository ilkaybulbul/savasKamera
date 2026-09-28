import { useTranslation } from 'react-i18next';
import { asset } from '@/lib/utils';

export default function References() {
    const { t } = useTranslation();

    const references = [
        { title: "Çankaya Plaza", img: asset("/photos/ref-plaza-atrium.webp"), type: "Ticari", pos: "50% 50%" },
        { title: "Batıkent Sitesi", img: asset("/photos/ref-residential-site.webp"), type: "Konut", pos: "36% 50%" },
        { title: "Gölbaşı Villa", img: asset("/photos/ref-villa-dusk.webp"), type: "Müstakil", pos: "40% 50%" },
        { title: "Ostim Fabrika", img: asset("/photos/ref-factory-dusk.webp"), type: "Sanayi", pos: "62% 50%" },
    ];

    return (
        <section className="w-full bg-canvas py-20 lg:py-28" id="references">
            <header className="mx-auto flex max-w-page flex-col gap-4 px-4 lg:px-10">
                <h2 className="t-display text-[clamp(2.75rem,6vw,5.25rem)] text-ink">{t('references.heading')}</h2>
                <p className="t-lead max-w-[52ch]">{t('references.desc')}</p>
            </header>

            {/* Swipe row on phones, 4-up grid from lg */}
            <ul className="mx-auto mt-10 flex max-w-page snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-10 [&::-webkit-scrollbar]:hidden">
                {references.map(ref => (
                    <li key={ref.title} className="group relative aspect-[3/4] w-[78%] shrink-0 snap-start overflow-hidden rounded-card bg-surface sm:w-[46%] lg:w-auto">
                        <img
                            src={ref.img}
                            alt={ref.title}
                            loading="lazy"
                            style={{ objectPosition: ref.pos }}
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        <span className="chip absolute left-4 top-4 bg-mint text-xs font-semibold text-accent-ink">{ref.type}</span>
                        <div className="absolute inset-x-3 bottom-3 rounded-plate bg-canvas px-5 py-4">
                            <h3 className="t-display text-[28px] text-ink">{ref.title}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
