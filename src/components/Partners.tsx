import { useTranslation } from 'react-i18next';

const partners = ["Audio", "Dahua", "Hikvision", "X5Tech", "UNV", "FIBRA"];

export default function Partners() {
    const { t } = useTranslation();

    return (
        <section className="w-full overflow-hidden bg-canvas py-20 lg:py-28" id="partners">
            <header className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center">
                <span className="chip bg-surface text-ink">
                    {t('partners.title') || 'İş Ortaklarımız'}
                </span>
                <h2 className="t-display text-[clamp(2.5rem,5vw,4.5rem)] text-ink">
                    {t('partners.heading') || 'Güvenilir Markalarla Çalışıyoruz'}
                </h2>
                <p className="t-lead max-w-[52ch]">
                    {t('partners.desc') || 'Dünya çapında tanınmış güvenlik kamera markalarının yetkili satıcısı ve kurulum ortağıyız'}
                </p>
            </header>

            <p className="sr-only">{partners.join(', ')}</p>
            {/* lang="en": brand names must not get Turkish dotted-İ casing from `uppercase`. */}
            <div
                lang="en"
                className="marquee relative mt-12 flex [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
            >
                <div className="marquee-track flex shrink-0 items-center">
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <span
                            key={index}
                            aria-hidden="true"
                            className="t-display cursor-default select-none px-8 text-[clamp(3.5rem,7vw,6.5rem)] uppercase text-ghost transition-colors duration-300 hover:text-ink md:px-12"
                        >
                            {partner}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-12 flex justify-center px-4">
                <span className="chip bg-mint px-5 py-2.5 text-center text-accent-ink">
                    <span className="material-symbols-outlined material-symbols-filled text-[20px]">verified</span>
                    Tüm Markalar İçin Yetkili Satış ve Servis Noktası
                </span>
            </div>
        </section>
    );
}
