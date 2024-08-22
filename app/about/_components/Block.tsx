type Props = {
    children?: React.ReactNode
}

export default function Block({ children }: Props) {
    return (
        <div className="mb-16">
            {children}
        </div>
    )
}