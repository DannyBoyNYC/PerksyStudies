import React from "react";

import brands from "../assets/brands.png";
import logoSticker from "../assets/sticker.png";
import videoSlo from "../assets/video-slo.mp4";

import SvgCaret from "../components/svg/SvgCaret";

export const Hero = () => {
  return (
    <>
      <div id="test-video-container">
        <video id="test-video" autoPlay muted loop>
          <source src={videoSlo} />
        </video>

        <div className="hero">
          <div>
            <div className="text-block">
              <img className="sticker" src={logoSticker} alt="Perksy logo" />
              <h1>Start looking at consumer feedback differently.</h1>
              <p>
                Persky is a next-gen insights platform that powers contextual,
                in-the-moment research with everyday consumers through mobile.
              </p>
              <img src={brands} alt="brands" />
              <p>
                <a href="/">
                  Customer Case Studies
                  <SvgCaret />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
