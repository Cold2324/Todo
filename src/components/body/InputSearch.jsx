function InputSearch({ setSearchValue }) {
  const onSearchTask = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <input
      type="search"
      id="header--search"
      placeholder="search..."
      onChange={(e) => onSearchTask(e)}
    />
  )
}

export default InputSearch
