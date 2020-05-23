import React from "react"
import "../css/styles.css"

import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { ValueProp } from "../components/content-block/ValueProp"
import { ContentBlock } from "../components/content-block/ContentBlock"
import { Footer } from "../components/Footer"

import { InfoGraphic } from "../components/content-block/InfoGraphic"

import captivate from "../assets/infographics/captivate.png"
import reach from "../assets/infographics/reach.png"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ValueProp />
      <InfoGraphic />
      <ContentBlock
        contentNum="01"
        headline="Captivate"
        subHead="Engaging audiences through mobile"
        contentPara="Perksy was designed to address the respondent experience first through an immersive mobile solution."
        infoGraphic={captivate}
      />
      <ContentBlock
        contentNum="02"
        headline="Real and Representative"
        subHead="Finding the audience that matters most"
        contentPara="Perksy connects you with a real and representative sample of everyday consumers - with a special focus on some of the hardest to reach audiences like Gen yz - so you can talk to the people who matter most to your brand at scale."
        infoGraphic={reach}
      />
      <ContentBlock
        contentNum="03"
        headline="Life Cycle Insights"
        subHead="Powering insights for your brand at every consumer inflection point"
        contentPara="Perksy has an extensive suite of research offerings and can support your business through every phase of the product development process."
        infoGraphic={captivate}
      />
      <ContentBlock
        contentNum="04"
        headline="Powered By Technology"
        subHead="Insights at the speed of culture"
        contentPara="Perksy's platform puts the power of bespoke research at your fingertips."
        infoGraphic={captivate}
      />
      <Footer />
    </>
  )
}
