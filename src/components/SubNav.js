import React from "react";
import { Link } from "gatsby";

export const SubNav = ({ showing, linkText }) => {
  return (
    <div
      className="subnav"
      style={showing ? { display: "block" } : { display: "none" }}
    >
      <div className="submenu-container">
        <div className="col col-1">
          <Link to={`/${linkText}`}>
            <h2>{linkText}</h2>
          </Link>
          <p>Engaging audiences through mobile</p>
        </div>
        <div className="col">
          <h3>
            <Link to="#">Surveys Reimagined </Link>
          </h3>
          <p>
            Perksy helps you reach the right people, so you can make decisions
            with more confidence.
          </p>
          <h3>
            <Link to="#">Real &amp; Representative</Link>
          </h3>
          <p>
            Our audience is unique, diverse, and entirely our own, meaning
            you’re getting first-party data from consumers you can continue to
            talk to over time.
          </p>
        </div>
        <div className="col">
          <h3>
            <Link to="#">Customer Testimonials</Link>
          </h3>
          <p>
            In a side-by-side comparison with P&amp;G, Perksy was able to match
            a year’s worth of research within 8 hours.
          </p>
        </div>
      </div>
    </div>
  );
};
