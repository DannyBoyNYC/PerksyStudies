import React from "react";
import { Layout } from "../components/Layout";
import { HeroPageFour } from "../components/HeroPageFour";

import videoCallouts from "../assets/callouts.mp4";

export default () => (
  <Layout>
    <div className="page-block">
      <HeroPageFour />
      <div className="content-container">
        <h1>Our Technology</h1>
        <p>
          Our experienced team of technologists, researchers, and strategists
          are here to guide you from survey design to data analysis – and
          everything in between.
        </p>
        {/* eslint-ignore */}
        <video id="video-callouts" controls style={{ width: "960px" }}>
          <source src={videoCallouts} />
          <track default kind="captions"></track>
        </video>

        <h2>Options For All Your Needs</h2>

        <p>
          Whatever problem you’re trying to solve, Perksy will be there to help
          you every step of the way.
        </p>

        <ul>
          <li>
            Self Serve
            <p>
              Know what to ask, who to ask, and when to ask it? For brands who
              are simply seeking a digital solution to conduct their research
              and provide access to their target audience, Perksy’s self-serve
              platform is ready when you are.
            </p>
          </li>
          <li>
            Full Serve
            <p>
              From light servicing like helping you create questions to
              full-scale approaches that identify your needs, design strategies,
              launch campaigns, then analyze and report back to you - we’ve got
              multiple tiers to fit any need and budget.
            </p>
          </li>
        </ul>
        <h2>Quant &amp; Qual</h2>
        <p>
          Whether quantitative to qualitative, Perksy brings you solutions for
          all your consumer research needs.
        </p>
        <p>
          Perksy offers all standard quantitative questions, including multiple
          choice, Likert scales, ranking, and numeric input among many others.
        </p>
        <p>
          We also offer qualitative response options including image, text, and
          video response.
        </p>
      </div>
    </div>
  </Layout>
);
