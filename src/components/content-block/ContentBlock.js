import React from "react"

import SvgCaret from "../../components/svg/SvgCaret"

import { InfoGraphic } from "./InfoGraphic"

export const ContentBlock = ({
  contentNum,
  headline,
  subHead,
  contentPara,
  infoGraphic,
  ...props
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

        {props.special ? (
          <div className="special">
            <img
              src={infoGraphic}
              alt={`Infographic for ${headline}`}
              style={{ background: "red" }}
            />
            <InfoGraphic />
          </div>
        ) : (
          <img src={infoGraphic} alt={`Infographic for ${headline}`} />
        )}

        <a href="/">
          Learn more
          <SvgCaret />
        </a>
      </div>
    </div>
  )
}
