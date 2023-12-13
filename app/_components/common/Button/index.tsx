interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className="text-xs"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
