export default function Highlight({ children }: { children: React.ReactNode }) {
    return <span className="text-[var(--color-text-accent)] font-semibold">{children}</span>
}