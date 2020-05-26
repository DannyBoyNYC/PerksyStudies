import React from "react";
import "../css/styles.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import dataFile from "../data/data";

export const Layout = ({ children }) => (
  <>
    <Header dataFile={dataFile} />
    {children}
    <Footer />
  </>
);
