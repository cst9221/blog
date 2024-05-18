const Card = ({children, direction = "vertical", ...rest}) => {
  return (
    <div className={`rounded-md p-4 shadow-[0_0_5px_5px_rgba(0,0,0,0.08)] bg-gray0`}>
      <div className={`flex ${direction === "vertical" ? "flex-col" : "flex-row"}`}>{children}</div>
    </div>
  )
}

export default Card
