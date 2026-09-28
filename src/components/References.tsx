import { useTranslation } from 'react-i18next';

export default function References() {
    const { t } = useTranslation();

    const references = [
        { title: "Çankaya Plaza", img: "/showcase/plaza.jpg", type: "Ticari" },
        { title: "Batıkent Sitesi", img: "/showcase/door-entry.jpg", type: "Konut" },
        { title: "Gölbaşı Villa", img: "/showcase/villa-cam.jpg", type: "Müstakil" },
        { title: "Ostim Fabrika", img: "/showcase/night-cam.jpg", type: "Sanayi" },
    ];

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark" id="references">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">{t('nav.references')}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white">{t('references.heading')}</h2>
                    <p className="text-slate-600 dark:text-gray-300 mt-4">{t('references.desc')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {references.map((ref, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${ref.img})` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300">
                                <span className="text-primary font-bold text-xs uppercase tracking-wider mb-1">{ref.type}</span>
                                <h3 className="text-white font-bold text-xl">{ref.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
