import React from "react"
import Lock from "../images/lock.png"
import Help from "../images/help.png"
import Wo from "../images/wo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Lock} alt="admin" className="lock" />
      <img alt="West Ottawa logo" src={Wo} className="bottom-logo" />
      <img src={Help} alt="help" className="help" />
    </div>
  )
}

export default Footer
