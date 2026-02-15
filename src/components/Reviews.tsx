import { useTranslation } from 'react-i18next';

const ReviewCard = ({ name, role, quote, img }: { name: string, role: string, quote: string, img: string }) => (
    <div className="cursor-pointer bg-white dark:bg-surface-dark p-8 rounded-2xl relative shadow-sm border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300">
        <span className="material-symbols-outlined text-4xl text-primary/20 absolute top-6 right-6">format_quote</span>
        <div className="flex gap-1 text-yellow-400 mb-4">
            {[1, 2, 3, 4, 5].map(i => (
                <span key={i} className="material-symbols-outlined text-xl fill-current material-symbols-filled">star</span>
            ))}
        </div>
        <p className="text-text-muted dark:text-gray-300 italic mb-6">"{quote}"</p>
        <div className="flex items-center gap-3">
            <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-white dark:ring-slate-800">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }}></div>
            </div>
            <div>
                <p className="font-bold text-text-dark dark:text-white text-sm">{name}</p>
                <p className="text-xs text-text-muted dark:text-gray-500">{role}</p>
            </div>
        </div>
    </div>
);

export default function Reviews() {
    const { t } = useTranslation();

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark" id="reviews">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white text-center mb-12">{t('reviews.heading')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <ReviewCard
                        name="Mehmet R."
                        role={t('reviews.r1.role')}
                        quote={t('reviews.r1.quote')}
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuBwNRb-UNvscxYregRVHTlfuTgbhS8Erzi4_eeCIuysXvzVFlJjYqQMzPMvOOUSajaxyyHCubFOv9fya3LVwC3MCGhckfxLoToK3iZylXnfGdY1o2UZWfD-cpets77DwgOlBWgjY_f0U3wkOvLb8wmxv2vQBLr5rN8RzLFYEOXlw9fS0tSH5ImjeGCOh06VF9-O6Y0p0rVXf5v0E_zrgS8c3o8Ouve6VPh-Cnh4mkADvS5i-eRwT1iOoP9CSda2-iW3nLmcoaAgvg"
                    />
                    <ReviewCard
                        name="Selin L."
                        role={t('reviews.r2.role')}
                        quote={t('reviews.r2.quote')}
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuCqrsPLNoT-yV3keoYDt1wG-e8zs2GFpRZ4x4MKNUolaR-UV7o5IjxJc8qPxW-yMTGSSjYrtDqcbPbxImKdI6XOfF4K6OY0JzX-pHiKYwE7_-CbNlx_ZTEAIbBlaOGxE3ndd9llwdr-3MdbNf4pxCKFBOmE8EHMW_VVTcYgAtP1WtQ67S9ilzPImFH2Ukrj7eS3MezBLt4sN4lmQayIv4VcNP3TePn1pbWne_t5G3QTO3TI1cEm_1V4aUdoIOl_Qzo7HKc8pHMaCQ"
                    />
                    <ReviewCard
                        name="Davut K."
                        role={t('reviews.r3.role')}
                        quote={t('reviews.r3.quote')}
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuDi0n3dTXBvtGXIiDhYDmP1h_dHx0NAuN-Bnn9Hbd1u8vZMr2_gTIBcVvm2tW7Q6OGC3r5k3d4meroVB4u25-CQieruN0Fg3a17IFQIGp1z2D9PdgnpJtmcXdAUM7f_fVI9mvMG2k7orLg-RtkvGDr_PQgnCzmt9sXzSh6Xg7P_nNIxKQCd1jCBc2WEv5JhuRm1wpcVmPnJRpGXBFrOl7XOk10D2YaDO0pol6ZVSJa1zHlz-aCjAWvd9ZgdZ4oBOlTyRsyquWPkPw"
                    />
                </div>
            </div>
        </section>
    );
}
