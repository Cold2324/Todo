import React from 'react'

function InputSearch(props) {
  const onSearchTask = (e) => {
    props.setSearchValue(e.target.value)
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
