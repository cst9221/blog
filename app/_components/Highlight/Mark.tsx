interface Props extends React.HtmlHTMLAttributes<HTMLElement> {}

const Mark = ({ children, ...props }: Props) => {
  return (
    <mark
      //   className="relative before:absolute before:bottom-0 before:bg-[#7efff599] before:w-[calc(100%+4px)] before:h-[60%] before:z-[-1]"
      // className="shadow-[inset_0_-.6em_0_#9bc4dc]"
      className="bg-[#1a1a1a] text-[#9bd4f5] px-1 rounded-sm"
      // className="font-bold"
      {...props}
    >
      {children}
    </mark>
  )
}

export default Mark
