import React from "react"

import SvgCaret from "../../components/svg/SvgCaret"

export const ContentBlock = ({
  contentNum,
  headline,
  subHead,
  contentPara,
  infoGraphic,
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

        <img
          style={{ maxWidth: "70%", marginLeft: "10rem" }}
          src={infoGraphic}
          alt={`Infographic for ${{ headline }} `}
        />

        <a href="/">
          Learn more
          <SvgCaret />
        </a>
      </div>
    </div>
  )
}
