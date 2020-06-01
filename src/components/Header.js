import React from "react";

import { SubNav } from "./SubNav";

export const NavLink = ({ contentNum, linkText, data }) => {
  const [showing, showMenu] = React.useState(false);

  const menuDrop = event => {
    event.preventDefault();
    showMenu(!showing);
  };

  return (
    <li className={linkText}>
      <a href="/" onClick={menuDrop}>
        <span>{contentNum}</span>
        {linkText}
      </a>
      <SubNav showing={showing} linkText={linkText} data={data} />
    </li>
  );
};

export const Header = ({ dataFile }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/"> </a>
        </div>
        <div className="mainlinks">
          <ul>
            {dataFile.map((content, index) => (
              <NavLink
                contentNum={`0${index + 1}`}
                linkText={content.link}
                data={content}
                key={content.link}
              />
            ))}
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
  );
};
