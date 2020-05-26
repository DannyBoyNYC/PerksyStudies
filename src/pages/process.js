import React from "react";
import { Layout } from "../components/Layout";
import { HeroPageThree } from "../components/HeroPageThree";

export default () => (
  <Layout>
    <div className="page-block">
      <HeroPageThree />
      <div className="content-container">
        <h1>One Stop Shop</h1>
        <p>
          Perksy has an extensive suite of research offerings and can support
          your business through every phase of the product development process.
        </p>

        <p>
          With various question types and campaign types, Perksy provides both
          quantitative and qualitative solutions to revolutionize how you
          conduct research today – from in-store guest intercepts to brand
          health trackers.
        </p>

        <ul>
          <li>Explore consumer behaviors and attitudes</li>
          <li>Test new concepts and brand collateral</li>
          <li>Track awareness, intent, and satisfaction</li>
        </ul>

        <h2>Life Cycle Insights</h2>

        <ul>
          <li>
            Market Exploration
            <p>
              Explore the current purchase behaviors and attitudes within your
              category
            </p>
          </li>
          <li>
            Concept Testing
            <p>
              Test your concept(s) with real consumers to understand market
              appetite
            </p>
          </li>
          <li>
            Consumer Segmentation
            <p>Evaluate which consumers respond most to your concept</p>
          </li>
          <li>
            Package Testing
            <p>Test whether your package design stands out on the shelf</p>
          </li>
          <li>
            Add and Message Testing
            <p>
              Measure whether your messaging moves the needle with consumers
            </p>
          </li>
          <li>
            Brand Tracking
            <p>
              Track your brand KPIs and measure levels against your competative
              set
            </p>
          </li>
          <li>
            Purchase Journeys and In-store Testing
            <p>
              Follow consumers through their purchase journey from consideration
              to purchase
            </p>
          </li>
          <li>
            Consumer Satisfaction Testing
            <p>Measure satisfaction among exiting consumer base</p>
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
