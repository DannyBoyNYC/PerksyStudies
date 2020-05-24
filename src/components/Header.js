import React, { useState } from "react"

import { SubNav } from "./SubNav"
// const navItems = [
//   {
//     contentNum: "01",
//     linkText: "Captivate",
//   },
// ]

export const NavLink = ({ contentNum, linkText }) => {
  const [showing, showMenu] = useState(false)

  const menuDrop = event => {
    console.log(event.target)
    event.target.tagName.toLowerCase() === "a" && event.preventDefault()
    showMenu(!showing)
  }

  return (
    <>
      <li className={linkText}>
        <a href="/" onClick={menuDrop}>
          <span>{contentNum}</span>
          {linkText}
        </a>
      </li>
      <SubNav showing={showing} menuType={linkText} menuDrop={menuDrop} />
    </>
  )
}

export const Header = () => {
  const [dark, setDark] = useState(false)

  return (
    <header
      className={dark ? "header-switch" : ""}
      onMouseEnter={() => setDark(true)}
      onMouseLeave={() => setDark(false)}
    >
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
