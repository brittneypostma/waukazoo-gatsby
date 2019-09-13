import { Link } from "gatsby"
import React from "react"
import Lock from "../images/lock.png"
import Help from "../images/help.png"
import Wo from "../images/wo.png"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/admin">
        <img src={Lock} alt="admin" className="lock" />
      </Link>
      <img alt="West Ottawa logo" src={Wo} className="bottom-logo" />
      <Link to="/help" className="help-link">
        <img src={Help} alt="help" className="help" />
      </Link>
    </div>
  )
}

export default Footer
