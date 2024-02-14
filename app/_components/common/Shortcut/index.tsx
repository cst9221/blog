interface Props {
  children: React.ReactNode
}
const Shortcut = ({children}: Props) => {
  return <div className="flex justify-center items-center w-[14px] h-[14px] bg-slate-900 rounded-sm text-xs text-white">{children}</div>
}

export default Shortcut
