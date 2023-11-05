interface Props extends React.HtmlHTMLAttributes<HTMLElement> {}
const Main = ({ children, ...props }: Props) => {
  return (
    <main
      className="grid grid-cols-6 gap-2 mx-8 mt-8"
      {...props}
    >
      {children}
    </main>
  )
}

export default Main
