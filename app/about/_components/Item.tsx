type Props = {
    children?: React.ReactNode
}

export default function Item({ children }: Props) {
    return (
        <div className="text-gray-500 mb-2 leading-6">
            {children}
        </div>
    )
}