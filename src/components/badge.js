import React from "react"
import Logo from "../images/logo.png"

import "./badge.css"

const date = new Date()
const dateStr = date.toDateString()
const time = date.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
})

const Badge = () => {
  return (
    <div className="badge">
      <div className="logo-div">
        <img src={Logo} alt="Waukazoo Logo" className="logo-badge" />
        <p className="date">
          <span id="date">{dateStr}</span>
          <br />
          <span id="time">{time}</span>
        </p>
      </div>
    </div>
  )
}

export default Badge
