import { useTranslation } from 'react-i18next';
import { asset, requestService } from '@/lib/utils';

// TODO: swap the fallbacks for /photos/intercom-outdoor.webp, intercom-indoor.webp and intercom-app.webp when supplied.
const products = [
    { key: 'outdoor', img: asset('/photos/legacy-intercom.webp'), pos: '50% 50%' },
    { key: 'indoor', img: asset('/photos/why-intercom-touch.webp'), pos: '50% 45%' },
    { key: 'app', img: asset('/photos/process-intercom-use.webp'), pos: '45% 50%' },
];

const features = [
    { key: 'hd', icon: 'videocam' },
    { key: 'phone', icon: 'smartphone' },
    { key: 'scale', icon: 'apartment' },
    { key: 'access', icon: 'badge' },
    { key: 'history', icon: 'history' },
    { key: 'camera', icon: 'link' },
];

export default function Intercom() {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-canvas py-20 lg:py-28" id="intercom">
            <header className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center">
                <span className="chip bg-surface text-ink">{t('intercom.chip')}</span>
                <h2 className="t-display text-[clamp(2.75rem,6vw,5.25rem)] text-ink">{t('intercom.heading')}</h2>
                <p className="t-lead max-w-[56ch]">{t('intercom.desc')}</p>
            </header>

            {/* Product cards: swipe row on phones, 3-up from lg (same pattern as References) */}
            <ul className="mx-auto mt-12 flex max-w-page snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-10 [&::-webkit-scrollbar]:hidden">
                {products.map(product => (
                    <li key={product.key} className="group relative aspect-[3/4] w-[80%] shrink-0 snap-start overflow-hidden rounded-card bg-surface sm:w-[46%] lg:w-auto">
                        <img
                            src={product.img}
                            alt={t(`intercom.products.${product.key}.title`)}
                            loading="lazy"
                            style={{ objectPosition: product.pos }}
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        <span className="chip absolute left-4 top-4 bg-mint text-xs font-semibold text-accent-ink">
                            {t(`intercom.products.${product.key}.chip`)}
                        </span>
                        <div className="absolute inset-x-3 bottom-3 rounded-plate bg-canvas px-5 py-4">
                            <h3 className="t-display text-[28px] text-ink">{t(`intercom.products.${product.key}.title`)}</h3>
                            <p className="mt-2 text-sm leading-5 text-ink-muted">{t(`intercom.products.${product.key}.desc`)}</p>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Features (same tile style as WhyUs) */}
            <ul className="mx-auto mt-4 grid max-w-page gap-3 px-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:px-10">
                {features.map(item => (
                    <li key={item.key} className="flex flex-col gap-3 rounded-[24px] bg-surface p-6">
                        <span className="flex size-11 items-center justify-center rounded-full bg-canvas text-ink">
                            <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                        </span>
                        <h3 className="text-lg font-semibold leading-6 text-ink">{t(`intercom.features.${item.key}.title`)}</h3>
                        <p className="text-[15px] leading-6 text-ink-muted">{t(`intercom.features.${item.key}.desc`)}</p>
                    </li>
                ))}
            </ul>

            {/* Call to action on night, so it does not read as a repeat of the accent CTA in Services */}
            <div className="px-4 pt-16 lg:px-10">
                <div className="mx-auto grid max-w-page items-center gap-10 overflow-hidden rounded-card bg-night p-8 text-on-night sm:p-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:rounded-hero lg:p-16">
                    <div className="flex flex-col gap-6">
                        <span className="chip bg-on-night/10 text-on-night">
                            <span className="material-symbols-outlined text-[18px]">apartment</span>
                            {t('intercom.cta.chip')}
                        </span>
                        <h3 className="t-display text-[clamp(2.5rem,5vw,4.5rem)]">{t('intercom.cta.title')}</h3>
                        <p className="max-w-[48ch] text-lg leading-7 text-on-night/75">{t('intercom.cta.desc')}</p>
                        <button onClick={() => requestService('intercom')} className="btn btn-lg btn-accent w-full sm:w-fit">
                            {t('intercom.cta.button')}
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </button>
                    </div>
                    <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-card">
                        {/* TODO: replace with /photos/intercom-building.webp when supplied. */}
                        <img
                            src={asset('/photos/legacy-door-entry.webp')}
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
