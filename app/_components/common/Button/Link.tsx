import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"

interface Props extends LinkProps {
  children: ReactNode
  target: string
}

const LinkButton = ({ children, ...props }: Props) => {
  return (
    <Link
      className="hover:bg-[#00000017] rounded-sm"
      {...props}
    >
      {children}
    </Link>
  )
}

export default LinkButton
