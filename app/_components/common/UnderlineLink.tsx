import Link, { LinkProps } from "next/link";

type Props = {
    children: React.ReactNode
    target?: string
} & LinkProps

export default function UnderlineLink({ children, ...props }: Props) {

    return <Link {...props} className="underline decoration-[var(--color-border-secondary)] hover:text-[var(--color-text-accent)] hover:decoration-[var(--color-text-accent)]">{children}</Link>
}