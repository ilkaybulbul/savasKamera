import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '', propertyType: 'Konut / Daire' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(t('contact.success'));
        setFormData({ firstName: '', lastName: '', phone: '', propertyType: 'Konut / Daire' });
    };

    return (
        <section className="w-full min-h-screen flex items-center py-20 px-4 md:px-8 bg-white dark:bg-surface-dark" id="contact-form">
            <div className="max-w-7xl mx-auto rounded-3xl bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                <div className="grid lg:grid-cols-2">
                    <div className="p-8 md:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-text-dark dark:text-white mb-2">{t('contact.heading')}</h2>
                        <p className="text-text-muted dark:text-gray-400 mb-8">{t('contact.desc')}</p>
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-sm font-medium text-text-dark dark:text-gray-200 mb-1">{t('contact.name')}</label>
                                    <input
                                        required
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        placeholder="Ahmet"
                                        type="text"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-sm font-medium text-text-dark dark:text-gray-200 mb-1">{t('contact.surname')}</label>
                                    <input
                                        required
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        placeholder="Yılmaz"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-dark dark:text-gray-200 mb-1">{t('contact.phone')}</label>
                                <input
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="0555 555 55 55"
                                    type="tel"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-dark dark:text-gray-200 mb-1">{t('contact.property')}</label>
                                <select
                                    value={formData.propertyType}
                                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                                >
                                    <option>Konut / Daire</option>
                                    <option>Villa / Müstakil</option>
                                    <option>Ticari İşletme</option>
                                    <option>Site / Apartman Yönetimi</option>
                                </select>
                            </div>
                            <button className="bg-primary hover:bg-primary-dark text-white text-base font-bold px-8 py-4 rounded-lg shadow-lg shadow-primary/20 transition-all mt-4 w-full">
                                {t('contact.submit')}
                            </button>
                        </form>
                    </div>
                    <div className="relative bg-slate-200 min-h-[400px]">
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7kuDByUaSAORiyTfyxN76tbeBII_GC3uGqGfkHDswQ3Vcb8o2AdV83KSSIJzDQ9AWEUhwcBSPhGPgvCIbFJYyHfAZ66nVLm7GMX34MMQbeZvfVirzQFdYRHgpWiKt664wRpcORhggdYq2UxvIai_7Rs46KbMvxbpGiAJEbQ8mDRvbbOZ0NZ0_zZuiihGmbE_ugJxzevAmVkeHiaoxKV5RkkjsNVwNND11OsUzsaz1cIXLXnxgyb2-nP-xnS4JIwr0owtnko5hkw')" }}>
                        </div>
                        <div className="absolute inset-0 bg-primary/80 dark:bg-navy-900/80 flex flex-col items-center justify-center text-center p-12">
                            <span className="material-symbols-outlined text-white text-6xl mb-6">map</span>
                            <h3 className="text-3xl font-bold text-white mb-2">{t('contact.mapTitle')}</h3>
                            <p className="text-blue-100 max-w-sm mb-8">{t('contact.mapDesc')}</p>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-left w-full max-w-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="size-10 rounded-full bg-white text-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined">phone</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-blue-200 uppercase tracking-wide">{t('footer.call')}</p>
                                        <p className="text-white font-bold text-xl">0540 591 06 19</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-white text-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined">email</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-blue-200 uppercase tracking-wide">{t('footer.email')}</p>
                                        <p className="text-white font-bold">destek@ankaraguvenlik.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
