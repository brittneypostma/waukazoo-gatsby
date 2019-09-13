import React from "react"
import "./back-button.css"

const BackBtn = ({ children }) => {
  return (
    <div>
      <button className="back">{children}</button>
    </div>
  )
}

export default BackBtn
