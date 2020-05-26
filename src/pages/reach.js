import React from "react";
import { Layout } from "../components/Layout";
import { HeroPageTwo } from "../components/HeroPageTwo";

export default () => (
  <Layout>
    <div className="page-block">
      <HeroPageTwo />
      <div className="content-container">
        <h1>Real &amp; Representative</h1>
        <p>
          Our audience is unique, diverse, and entirely our own, meaning you’re
          getting first-party data from consumers you can continue to talk to
          over time.{" "}
        </p>
        <ul>
          <li>No third-party sample</li>
          <li>
            Real people – not professional panelists (70% don't answer surveys
            on any other platform)
          </li>
          <li>Nationally representative (every state &amp; province)</li>
          <li>Audience continuously updated and expanded</li>
          <li>Specialty with Millennials &amp; Gen-Z</li>
        </ul>
        <h2>Premium Audience</h2>
        <p>
          Perksy connects brands with some of the hardest-to-reach consumers,
          like:
        </p>
        <ul>
          <li>Young parents</li>
          <li>Diverse ethnic audiences (130 cultural combos)</li>
          <li>Teens (starting at age 13)</li>
          <li>High-income young professionals</li>
          <li>On-the-go travelers</li>
          <li>High school and college students</li>
        </ul>
        <h2>But don't just take our word for it…</h2>
        <p>
          In a side-by-side comparison with P&amp;G, Perksy was able to match a
          year’s worth of research within 8 hours.
        </p>
        <p>
          P&amp;G's Chief Brand Officer, Marc Pritchard, even took to Forbes to
          say our data was in line with what they did pre-launch.
        </p>
      </div>
    </div>
  </Layout>
);
