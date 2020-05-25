import React from "react"

export const SubNav = ({ showing }) => {
  return (
    <div
      className="subnav"
      style={showing ? { display: "block" } : { display: "none" }}
    >
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
            In a side-by-side comparison with P&amp;G, Perksy was able to match
            a year’s worth of research within 8 hours.
          </p>
        </div>
      </div>
    </div>
  )
}
