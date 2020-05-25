import React from "react"
import "../css/styles.css"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
