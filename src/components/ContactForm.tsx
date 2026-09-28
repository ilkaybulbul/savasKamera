import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { asset } from '@/lib/utils';

const inputClass = "h-14 w-full rounded-2xl border border-line bg-canvas px-5 text-base text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink-muted/70 focus:border-ink focus:ring-4 focus:ring-ink/10";
const labelClass = "mb-2 block text-sm font-medium text-ink";

export default function ContactForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '', propertyType: 'Konut / Daire' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(t('contact.success'));
        setFormData({ firstName: '', lastName: '', phone: '', propertyType: 'Konut / Daire' });
    };

    return (
        <section className="w-full bg-canvas px-4 py-20 lg:px-10 lg:py-28" id="contact-form">
            <div className="mx-auto grid max-w-page gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
                <div className="rounded-card bg-surface p-6 sm:p-10 lg:rounded-hero lg:p-14">
                    <h2 className="t-display text-[clamp(2.5rem,5vw,4.5rem)] text-ink">{t('contact.heading')}</h2>
                    <p className="t-lead mt-4 max-w-[48ch]">{t('contact.desc')}</p>
                    <form className="mt-10 flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label htmlFor="cf-first" className={labelClass}>{t('contact.name')}</label>
                                <input
                                    id="cf-first"
                                    required
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className={inputClass}
                                    placeholder="Ahmet"
                                    type="text"
                                    autoComplete="given-name"
                                />
                            </div>
                            <div>
                                <label htmlFor="cf-last" className={labelClass}>{t('contact.surname')}</label>
                                <input
                                    id="cf-last"
                                    required
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className={inputClass}
                                    placeholder="Yılmaz"
                                    type="text"
                                    autoComplete="family-name"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cf-phone" className={labelClass}>{t('contact.phone')}</label>
                            <input
                                id="cf-phone"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className={inputClass}
                                placeholder="0555 555 55 55"
                                type="tel"
                                autoComplete="tel"
                            />
                        </div>
                        <div>
                            <label htmlFor="cf-property" className={labelClass}>{t('contact.property')}</label>
                            <div className="relative">
                                <select
                                    id="cf-property"
                                    value={formData.propertyType}
                                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                                    className={`${inputClass} cursor-pointer appearance-none pr-12`}
                                >
                                    <option>Konut / Daire</option>
                                    <option>Villa / Müstakil</option>
                                    <option>Ticari İşletme</option>
                                    <option>Site / Apartman Yönetimi</option>
                                </select>
                                <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted">expand_more</span>
                            </div>
                        </div>
                        <button className="btn btn-lg btn-ink mt-3 w-full">
                            {t('contact.submit')}
                        </button>
                    </form>
                </div>

                <div className="relative flex min-h-[480px] flex-col justify-between gap-10 overflow-hidden rounded-card bg-night p-6 text-on-night sm:p-10 lg:rounded-hero lg:p-14">
                    <img
                        src={asset("/photos/contact-night.webp")}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-[85%_50%]"
                    />
                    <div className="relative flex flex-col gap-5">
                        <span className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-ink">
                            <span className="material-symbols-outlined text-[28px]">map</span>
                        </span>
                        <h3 className="t-display text-[clamp(2.5rem,4.4vw,4rem)]">{t('contact.mapTitle')}</h3>
                        <p className="max-w-[40ch] text-lg leading-7 text-on-night/75">{t('contact.mapDesc')}</p>
                    </div>
                    <div className="relative flex flex-col gap-6 border-t border-on-night/15 pt-8">
                        <div>
                            <p className="text-sm text-on-night/60">{t('footer.call')}</p>
                            <a href="tel:05405910619" className="t-display text-[clamp(2.25rem,4vw,3.25rem)] hover:text-accent">0540 591 06 19</a>
                        </div>
                        <div>
                            <p className="text-sm text-on-night/60">{t('footer.email')}</p>
                            <p className="text-base font-semibold [overflow-wrap:anywhere] sm:text-lg">destek@ankaraguvenlik.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
