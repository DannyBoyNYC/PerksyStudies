import React from "react";
import { Link } from "gatsby";

import SvgCaret from "../../components/svg/SvgCaret";

import captivate from "../../assets/infographics/captivate.png";
import reach from "../../assets/infographics/reach.png";
import { InfoGraphic } from "./InfoGraphic";

export const ContentBlock = ({
  contentNum,
  headline,
  subHead,
  contentPara,
  infoGraphic,
  special,
}) => {
  return (
    <div className="content-block">
      <div className="content-container">
        <div className="containme">
          <h1>{contentNum}</h1>
          <h2>
            <span>{headline}</span> {subHead}
          </h2>
        </div>
        <p>{contentPara}</p>

        {special ? (
          <div className="special">
            <img
              src={reach}
              alt={`Infographic for ${headline}`}
              style={{ background: "red" }}
            />
            <InfoGraphic />
          </div>
        ) : (
          <img src={captivate} alt={`Infographic for ${headline}`} />
        )}

        <Link to={headline}>
          Learn more <SvgCaret />
        </Link>
      </div>
    </div>
  );
};
