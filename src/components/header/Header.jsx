import React from 'react'
import '../../sass/header/header.scss'
function Header() {
  return (
    <header>
      <div className="header--topbar"></div>
      <div className="header--search-container">
        <div id="header--search-subcontainer">
          <input
            type="search"
            id='header--search'
            placeholder='search...'
          />
        </div>
      </div>
    </header>
  )
}

export default Header