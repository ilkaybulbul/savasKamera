import { useTranslation } from 'react-i18next';

const WhatsAppIcon = ({ className }: { className: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

export default function FloatingButtons() {
    const { t } = useTranslation();

    // TODO: Gerçek WhatsApp numarasını buraya ekleyin
    const whatsappNumber = '905405910619'; // Örnek: 905551234567
    const phoneNumber = '05405910619';

    const whatsappLabel = t('floating.whatsapp') || 'WhatsApp ile iletişime geç';
    const callLabel = t('floating.call') || 'Hemen ara';

    return (
        <>
            {/* Phones and tablets: labelled action bar pinned to the bottom (App reserves its height). */}
            <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/95 px-4 py-3 backdrop-blur-md lg:hidden">
                <div className="mx-auto flex max-w-md gap-3">
                    <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn min-w-0 flex-1 bg-[#25D366] px-4 text-[15px] text-[#0A0B1F] hover:bg-[#20BA5A]"
                        aria-label={whatsappLabel}
                    >
                        <WhatsAppIcon className="size-5" />
                        WhatsApp
                    </a>
                    <a href={`tel:${phoneNumber}`} className="btn btn-ink min-w-0 flex-1 px-4 text-[15px]" aria-label={callLabel}>
                        <span className="material-symbols-outlined material-symbols-filled text-[20px]">call</span>
                        {callLabel}
                    </a>
                </div>
            </div>

            {/* Desktop: round buttons, bottom left */}
            <div className="fixed bottom-8 left-8 z-40 hidden flex-col gap-3 lg:flex">
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_2px_4px_rgb(10_11_31/0.12)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
                    aria-label={whatsappLabel}
                    title={whatsappLabel}
                >
                    <WhatsAppIcon className="size-7" />
                </a>
                <a
                    href={`tel:${phoneNumber}`}
                    className="flex size-14 items-center justify-center rounded-full border border-white/20 bg-ink text-canvas shadow-[0_2px_4px_rgb(10_11_31/0.12)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
                    aria-label={callLabel}
                    title={callLabel}
                >
                    <span className="material-symbols-outlined material-symbols-filled text-[26px]">call</span>
                </a>
            </div>
        </>
    );
}
