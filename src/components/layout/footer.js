import { Link } from "gatsby"
import React from "react"
import Lock from "../../images/lock.png"
import Help from "../../images/help.png"
import Wo from "../../images/wo.png"
import "./footer.css"

const password = () => {
  let testV = 1
  let pass1 = prompt("Please Enter Your Password", " ")
  if (pass1 === null) {
    return
  }
  while (testV < 3) {
    if (!pass1) window.location.assign("/")
    if (pass1.toLowerCase() === "letmein") {
      window.open(
        "https://docs.google.com/spreadsheets/d/13Mg3vM2jQj6JEfR1AHFcKV6NBIrSm4TnFr4tr-wSDFE/edit?usp=sharing",
        "_blank"
      )
      break
    }
    testV++
    pass1 = prompt(
      "Access Denied - Password Incorrect, Please Try Again.",
      "Password"
    )
  }
  if (pass1.toLowerCase() !== "letmein" && testV === 3)
    window.location.assign("/")
  return " "
}

const Footer = () => {
  return (
    <div className="footer">
      <button className="lock-btn" onClick={password}>
        <img src={Lock} alt="admin" className="lock" />
      </button>
      <img alt="West Ottawa logo" src={Wo} className="bottom-logo" />
      <Link to="/help" className="help-link">
        <img src={Help} alt="help" className="help" />
      </Link>
    </div>
  )
}

export default Footer
