const Select = ({data = [], ...rest}) => {
  return (
    <select>
      {data.map(({value, label}) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  )
}

export default Select
