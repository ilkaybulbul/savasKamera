import { useTranslation } from 'react-i18next';

type Review = { name: string, role: string, quote: string, img: string };

const Stars = () => (
    <div className="flex gap-0.5 text-ink" aria-label="5/5">
        {[1, 2, 3, 4, 5].map(i => (
            <span key={i} className="material-symbols-outlined material-symbols-filled text-[20px]">star</span>
        ))}
    </div>
);

const Person = ({ name, role, img }: Omit<Review, 'quote'>) => (
    <div className="flex items-center gap-3">
        <div className="size-12 overflow-hidden rounded-full bg-canvas">
            <img src={img} alt="" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
            <p className="font-semibold text-ink">{name}</p>
            <p className="text-sm text-ink-muted">{role}</p>
        </div>
    </div>
);

export default function Reviews() {
    const { t } = useTranslation();

    const reviews: Review[] = [
        {
            name: "Mehmet R.",
            role: t('reviews.r1.role'),
            quote: t('reviews.r1.quote'),
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwNRb-UNvscxYregRVHTlfuTgbhS8Erzi4_eeCIuysXvzVFlJjYqQMzPMvOOUSajaxyyHCubFOv9fya3LVwC3MCGhckfxLoToK3iZylXnfGdY1o2UZWfD-cpets77DwgOlBWgjY_f0U3wkOvLb8wmxv2vQBLr5rN8RzLFYEOXlw9fS0tSH5ImjeGCOh06VF9-O6Y0p0rVXf5v0E_zrgS8c3o8Ouve6VPh-Cnh4mkADvS5i-eRwT1iOoP9CSda2-iW3nLmcoaAgvg",
        },
        {
            name: "Selin L.",
            role: t('reviews.r2.role'),
            quote: t('reviews.r2.quote'),
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqrsPLNoT-yV3keoYDt1wG-e8zs2GFpRZ4x4MKNUolaR-UV7o5IjxJc8qPxW-yMTGSSjYrtDqcbPbxImKdI6XOfF4K6OY0JzX-pHiKYwE7_-CbNlx_ZTEAIbBlaOGxE3ndd9llwdr-3MdbNf4pxCKFBOmE8EHMW_VVTcYgAtP1WtQ67S9ilzPImFH2Ukrj7eS3MezBLt4sN4lmQayIv4VcNP3TePn1pbWne_t5G3QTO3TI1cEm_1V4aUdoIOl_Qzo7HKc8pHMaCQ",
        },
        {
            name: "Davut K.",
            role: t('reviews.r3.role'),
            quote: t('reviews.r3.quote'),
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi0n3dTXBvtGXIiDhYDmP1h_dHx0NAuN-Bnn9Hbd1u8vZMr2_gTIBcVvm2tW7Q6OGC3r5k3d4meroVB4u25-CQieruN0Fg3a17IFQIGp1z2D9PdgnpJtmcXdAUM7f_fVI9mvMG2k7orLg-RtkvGDr_PQgnCzmt9sXzSh6Xg7P_nNIxKQCd1jCBc2WEv5JhuRm1wpcVmPnJRpGXBFrOl7XOk10D2YaDO0pol6ZVSJa1zHlz-aCjAWvd9ZgdZ4oBOlTyRsyquWPkPw",
        },
    ];

    const [featured, ...rest] = reviews;

    return (
        <section className="w-full bg-canvas px-4 py-20 lg:px-10 lg:py-28" id="reviews">
            <div className="mx-auto max-w-page">
                <h2 className="t-display max-w-[14ch] text-[clamp(2.75rem,6vw,5.25rem)] text-ink">{t('reviews.heading')}</h2>

                <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
                    <figure className="flex flex-col justify-between gap-10 rounded-card bg-surface p-8 sm:p-12 lg:rounded-hero lg:p-14">
                        <div className="flex flex-col gap-6">
                            <Stars />
                            <blockquote className="t-display text-[clamp(2rem,3.4vw,3.25rem)] leading-[1.02] text-ink">
                                “{featured.quote}”
                            </blockquote>
                        </div>
                        <figcaption><Person {...featured} /></figcaption>
                    </figure>

                    <div className="grid gap-4">
                        {rest.map(review => (
                            <figure key={review.name} className="flex flex-col justify-between gap-6 rounded-card bg-surface p-8">
                                <div className="flex flex-col gap-4">
                                    <Stars />
                                    <blockquote className="text-lg leading-7 text-ink-soft">“{review.quote}”</blockquote>
                                </div>
                                <figcaption><Person {...review} /></figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
