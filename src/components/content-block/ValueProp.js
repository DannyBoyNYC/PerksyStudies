import React from "react";

import valueProp from "../../assets/infographics/value-prop.png";

export const ValueProp = () => {
  return (
    <div className="content-block">
      <div className="content-container">
        <div
          className="value-prop"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p
            style={{
              textAlign: "center",
              margin: "0 0 1rem 0",
              textTransform: "uppercase",
              fontSize: "1rem",
              letterSpacing: "4px",
            }}
          >
            optimize research processes, at scale
          </p>
          <h2 style={{ textAlign: "center" }}>A Better Way to Research</h2>

          <p
            style={{
              textAlign: "center",
              margin: "1rem 8rem 0 8rem",
              lineHeight: "1.8",
            }}
          >
            Leverage the power of mobile to access real and representative
            everyday consumers. Generate higher-quality responses through an
            engaging user experience and deliver deep analytics for better
            insights.
          </p>

          <img
            style={{ maxWidth: "80%", margin: "0 auto" }}
            src={valueProp}
            alt="infographic"
          />
        </div>
        <hr style={{ opacity: "0.15", marginTop: "4rem" }} />
      </div>
    </div>
  );
};
