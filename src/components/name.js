import React from "react"
import "./name-list.css"

const Name = ({ idx, lastname, firstname }) => {
  return (
    <div className="name">
      <p>
        {idx}. {firstname} {lastname}
      </p>
    </div>
  )
}

export default Name
