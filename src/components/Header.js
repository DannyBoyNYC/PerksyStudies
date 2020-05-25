import React from "react"
import { SubNav } from "./SubNav"

export const NavLink = ({ contentNum, linkText }) => {
  const [showing, showMenu] = React.useState(false)

  const menuDrop = event => {
    event.preventDefault()
    showMenu(!showing)
  }

  return (
    <li className={linkText}>
      <a href="/" onClick={menuDrop}>
        <span>{contentNum}</span>
        {linkText}
      </a>
      <SubNav showing={showing} />
    </li>
  )
}

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/"> </a>
        </div>
        <div className="mainlinks">
          <ul>
            <NavLink contentNum="01" linkText="captivate" />
            <NavLink contentNum="02" linkText="reach" />
            <NavLink contentNum="03" linkText="process" />
            <NavLink contentNum="04" linkText="technology" />
          </ul>
        </div>
        <div className="sublinks">
          <ul>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Request Demo</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
