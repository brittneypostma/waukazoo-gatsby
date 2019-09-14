import { Link } from "gatsby"
import React from "react"
import "./header.css"

import Logo from "../../images/logo.png"

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="logo" alt="waukazoo logo" src={Logo} />
    </Link>

    <h1 className="welcome">
      Welcome!
      <br />
      <span className="school">
        Waukazoo Elementary
        <br />
        <span className="visitor">Visitor Check In</span>
      </span>
    </h1>
  </header>
)

export default Header
