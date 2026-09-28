export default function Logo({ className = '', iconClassName = 'text-brand' }: { className?: string, iconClassName?: string }) {
    return (
        <span className={`flex items-center gap-2 ${className}`}>
            <span className={`material-symbols-outlined material-symbols-filled text-[26px] leading-none sm:text-[30px] ${iconClassName}`}>shield_lock</span>
            <span className="t-display whitespace-nowrap text-[24px] leading-none sm:text-[28px]">SK Güvenlik</span>
        </span>
    );
}
