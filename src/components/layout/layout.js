import React from "react"

import Footer from "./footer"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout invisible-scrollbar">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
