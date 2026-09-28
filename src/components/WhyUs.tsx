import { useTranslation } from 'react-i18next';
import { asset } from '@/lib/utils';

export default function WhyUs() {
    const { t } = useTranslation();

    const features = [
        { icon: 'location_on', title: t('whyUs.feat1.title'), desc: t('whyUs.feat1.desc') },
        { icon: 'bolt', title: t('whyUs.feat2.title'), desc: t('whyUs.feat2.desc') },
        { icon: 'smartphone', title: t('whyUs.feat3.title'), desc: t('whyUs.feat3.desc') },
        { icon: 'verified_user', title: t('whyUs.feat4.title'), desc: t('whyUs.feat4.desc') },
    ];

    const photos = [
        { img: asset("/showcase/intercom.jpg"), caption: t('whyUs.img1') },
        { img: asset("/showcase/plaza.jpg"), caption: t('whyUs.img2') },
    ];

    return (
        <section className="w-full bg-canvas px-4 py-20 lg:px-10 lg:py-32" id="why-us">
            <div className="mx-auto grid max-w-page items-center gap-14 lg:grid-cols-2 lg:gap-20">
                <div className="flex flex-col gap-8 lg:order-2">
                    <span className="chip bg-surface text-ink">{t('whyUs.badge')}</span>
                    <h2 className="t-display text-[clamp(2.75rem,6vw,5.25rem)] text-ink">{t('whyUs.heading')}</h2>
                    <p className="t-lead max-w-[56ch]">{t('whyUs.desc')}</p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                        {features.map(item => (
                            <li key={item.icon} className="flex flex-col gap-3 rounded-[24px] bg-surface p-6">
                                <span className="flex size-11 items-center justify-center rounded-full bg-canvas text-ink">
                                    <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                                </span>
                                <h3 className="text-lg font-semibold leading-6 text-ink">{item.title}</h3>
                                <p className="text-[15px] leading-6 text-ink-muted">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:order-1">
                    {photos.map((photo, i) => (
                        <figure key={photo.img} className={`relative overflow-hidden rounded-card ${i === 0 ? 'mt-16' : 'mb-16'}`}>
                            <img src={photo.img} alt={photo.caption} loading="lazy" className="aspect-[3/4] h-full w-full object-cover" />
                            <figcaption className="chip absolute bottom-4 left-4 right-4 w-auto justify-center bg-night/70 text-center text-on-night backdrop-blur-md sm:right-auto">
                                {photo.caption}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
