export default function Logo({ className = '', iconClassName = 'text-brand' }: { className?: string, iconClassName?: string }) {
    return (
        <span className={`flex items-center gap-2 ${className}`}>
            <span className={`material-symbols-outlined material-symbols-filled text-[30px] leading-none ${iconClassName}`}>shield_lock</span>
            <span className="t-display whitespace-nowrap text-[28px] leading-none">SK Güvenlik</span>
        </span>
    );
}
