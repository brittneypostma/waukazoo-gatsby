import React from "react"
import "./home-btn.css"

const HomeBtn = ({ children }) => {
  return (
    <div>
      <button className="home-btn">{children}</button>
    </div>
  )
}

export default HomeBtn
