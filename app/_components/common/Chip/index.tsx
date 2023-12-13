interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

const Chip = ({ children, ...props }: Props) => {
  return (
    <span
      className="bg-black"
      {...props}
    >
      {children}
    </span>
  )
}

export default Chip
