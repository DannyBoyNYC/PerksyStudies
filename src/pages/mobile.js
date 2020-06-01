import React from "react";
import { Layout } from "../components/Layout";
import mobileVideo from "../assets/respond.mp4";
import { HeroPage } from "../components/HeroPage";
import captivate from "../assets/infographics/01.png";

export default () => (
  <Layout>
    <div className="page-block">
      <HeroPage />
      <div className="content-container">
        <h1>Better experience, better data.</h1>

        {/* <video id="mobile-video" autoPlay muted loop style={{ width: "960px" }}>
          <source src={mobileVideo} />
        </video> */}

        <video id="mobile-video" src={mobileVideo} autoPlay muted loop>
          <track default kind="captions"></track>
        </video>
        <p>
          Perksy was designed to address the respondent experience first through
          an immersive mobile solution.
        </p>
        <p>
          With Perksy, it’s all about the experience. It's that patented mobile
          experience that brings us response rates upwards of 80%.
        </p>
        <p>
          Our patented design of image-rich screens help survey takers relate to
          the content, which creates a more immersive survey.
        </p>
        <p>
          A better experience leads to more engagement and responses. Better
          responses lead to better data and more in-depth, actionable insights
          you can count on.
        </p>
        <h2>Surveys Reimagined</h2>
        <p>
          Our interactive and immersive mobile-first experience is designed
          especially for the consumer – with response rates over 40x the
          competition.
        </p>
        <ul>
          <li>
            Mobile-First: We collect insights through the Perksy app, where
            users answer interactive, content-rich questions called “stacks”
            (our word for survey).
          </li>
          <li>
            Rewarding: Users earn points for each stack and can redeem at 100+
            brands in our Perkstore – like Delta, Amazon, Nordstrom, Sephora,
            and Uber.
          </li>
          <li>
            Gamified: A unique approach to survey design and delivery is fun and
            intuitive, redefining data capture by making it relevant for the
            mobile generation.
          </li>
          <li>
            Engaging: Our patented mobile experience leads to better responses
            and faster field times.
          </li>
        </ul>

        <img src={captivate} alt="captivate" style={{ width: "880px" }} />

        <h2>Quality, Assured.</h2>
        <ul>
          <li>
            Verified: We screen our users at login and have them verify their
            phone numbers to ensure they're real people.
          </li>
          <li>
            Bot-Prevention: Our patented press-and-hold response function serves
            as a mechanism to keep bots out and prevent survey speeding.
          </li>
          <li>
            Data Matching: We match user data with third-parties to ensure
            information is correct and people are who they say they are.
          </li>
          <li>
            Response Review: We review all responses to ensure they are
            quality-approved.
          </li>
          <li>
            Privacy: We never reveal a user's personally identifying information
            and are GDPR and CCPA compliant.
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);
