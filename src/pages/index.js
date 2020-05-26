import React from "react";

import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { ValueProp } from "../components/content-block/ValueProp";
import { ContentBlock } from "../components/content-block/ContentBlock";

import dataFile from "../data/data";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ValueProp />

      {dataFile.map((content, index) => (
        <ContentBlock
          key={content.id}
          contentNum={`0${index + 1}`}
          headline={content.headline}
          subHead={content.subHead}
          contentPara={content.contentPara}
          // infoGraphic={content.link}
          special={content.special}
        />
      ))}
    </Layout>
  );
}
