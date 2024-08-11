import { twMerge } from "tailwind-merge"

type Props = {
    children: React.ReactNode
    variant?: "active" | "inactive"
}

export default function Chip({ children, variant = "active" }: Props) {
    const style = variant === "active" ? "bg-gray-900 text-white" : "bg-gray-900/10 text-gray-900"

    return (
        <div
            className={twMerge(`relative grid select-none items-center whitespace-nowrap rounded-lg py-1.5 px-3 font-sans text-sm font-bold uppercase ${style}`)}
        >
            <span className="">{children}</span>
        </div>
    )
}