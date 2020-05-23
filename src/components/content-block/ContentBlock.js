import React from "react"

import ValueProp from "../../assets/infographics/value-prop.png"

export const ContentBlock = () => {
  return (
    <div className="content-block">
      <div className="content-container">
        <div
          className="containme"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h2 style={{ textAlign: "center" }}>
            <span>A Better Way to Research</span> Leverage the power of mobile
            to access real and representative everyday consumers. Generate
            higher-quality responses through an engaging user experience and
            deliver deep analytics for better insights. Perksy provides
            versatile, innovative tools for brands that optimize their research
            processes.
          </h2>

          <img style={{ maxWidth: "100%" }} src={ValueProp} alt="" />
        </div>
        <hr style={{ opacity: "0.25", marginTop: "4rem" }} />
      </div>
    </div>
  )
}
