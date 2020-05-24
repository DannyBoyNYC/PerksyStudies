import React, { useRef, useEffect } from "react"

export const Header = () => {
  const headerRef = useRef()
  return (
    <header className="header-switch" ref={headerRef}>
      <nav>
        <div className="logo">
          <a href="/"> </a>
        </div>
        <div className="mainlinks">
          <ul>
            <li className="link-captivate">
              <a href="/">
                <span>01</span>
                <br />
                Captivate
              </a>
            </li>
            <li className="link-reach">
              <a href="/">
                <span>02</span> <br />
                Reach
              </a>
            </li>
            <li className="link-process">
              <a href="/">
                <span>03</span> <br />
                Process
              </a>
            </li>
            <li className="link-technology">
              <a href="/">
                <span>04</span> <br />
                Technology
              </a>
            </li>
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

      <div className="subnav">
        <div className="submenu-container">
          <div className="col col-1">
            <h2>Captivate</h2>
            <p>Engaging audiences through mobile</p>
          </div>
          <div className="col">
            <h3>
              <a href="/">A Premium Audience </a>
            </h3>
            <p>
              Perksy helps you reach the right people, so you can make decisions
              with more confidence.
            </p>
            <h3>
              <a href="/">Real &amp; Representative</a>
            </h3>
            <p>
              Our audience is unique, diverse, and entirely our own, meaning
              you’re getting first-party data from consumers you can continue to
              talk to over time.
            </p>
          </div>
          <div className="col">
            <h3>
              <a href="/">Customer Testimonials</a>
            </h3>
            <p>
              In a side-by-side comparison with P&G, Perksy was able to match a
              year’s worth of research within 8 hours.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
