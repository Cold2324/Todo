import './header.scss'
function Header({ children }) {
  return (
    <header>
      <div className="header--topbar"></div>
      <div className="header--search-container">
        <div id="header--search-subcontainer">{children}</div>
      </div>
    </header>
  )
}

export default Header
