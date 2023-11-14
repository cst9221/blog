interface Props extends React.HtmlHTMLAttributes<HTMLElement> {}

const Mark = ({ children, ...props }: Props) => {
  return (
    <mark
      //   className="relative before:absolute before:bottom-0 before:bg-[#7efff599] before:w-[calc(100%+4px)] before:h-[60%] before:z-[-1]"
      className="shadow-[inset_0_-.55em_0_#c6eaff]"
      {...props}
    >
      {children}
    </mark>
  )
}

export default Mark
