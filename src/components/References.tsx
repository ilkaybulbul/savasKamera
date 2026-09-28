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

    // Photo wall under the project cards: new and earlier photos mixed. Spans are chosen so the
    // dense grid fills 4x4 cells on desktop and 2x8 on phones with no gaps; portraits get the tall cells.
    const gallery = [
        { img: asset("/photos/gallery-doorbell-dusk.webp"), span: "col-span-2", pos: "40% 40%", alt: "Dükkan girişinde görüntülü kapı zili", type: "Ticari" },
        { img: asset("/photos/legacy-villa-cam.webp"), span: "row-span-2", pos: "60% 50%", alt: "Villa girişinde güvenlik kamerası", type: "Müstakil" },
        { img: asset("/photos/legacy-white-camera.webp"), span: "", pos: "70% 50%", alt: "Duvara monte beyaz güvenlik kamerası" },
        { img: asset("/photos/gallery-garden-infrared.webp"), span: "col-span-2 row-span-2", pos: "50% 50%", alt: "Bahçede gece görüşlü kamera", type: "Konut" },
        { img: asset("/photos/gallery-lens-macro.webp"), span: "", pos: "45% 50%", alt: "Güvenlik kamerası lensi" },
        { img: asset("/photos/legacy-intercom.webp"), span: "row-span-2", pos: "50% 50%", alt: "Taş duvarda görüntülü diyafon", type: "Konut" },
        { img: asset("/photos/gallery-dome-camera.webp"), span: "", pos: "50% 50%", alt: "Dome güvenlik kamerası" },
        { img: asset("/photos/legacy-plaza.webp"), span: "", pos: "50% 50%", alt: "Plaza girişinde güvenlik kamerası", type: "Ticari" },
        { img: asset("/photos/legacy-door-entry.webp"), span: "", pos: "50% 55%", alt: "Bina kapısında kamera ve diyafon", type: "Konut" },
        { img: asset("/photos/gallery-white-camera.webp"), span: "", pos: "45% 50%", alt: "Beyaz duvarda bullet kamera" },
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

            <ul className="mx-auto mt-4 grid max-w-page grid-flow-row-dense auto-rows-[160px] grid-cols-2 gap-3 px-4 sm:auto-rows-[220px] sm:gap-4 lg:auto-rows-[240px] lg:grid-cols-4 lg:px-10">
                {gallery.map(photo => (
                    <li key={photo.img} className={`group relative overflow-hidden rounded-[24px] bg-surface lg:rounded-card ${photo.span}`}>
                        <img
                            src={photo.img}
                            alt={photo.alt}
                            loading="lazy"
                            decoding="async"
                            style={{ objectPosition: photo.pos }}
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        {photo.type && (
                            <span className="chip absolute left-3 top-3 bg-mint px-3 py-1 text-xs font-semibold text-accent-ink">{photo.type}</span>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}
