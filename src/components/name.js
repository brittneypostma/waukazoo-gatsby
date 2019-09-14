import React from "react"
import "./name-list.css"

const Name = ({ idx, lastname, firstname }) => {
  return (
    <tr className="name-row">
      <td>&nbsp;&nbsp;&nbsp;{idx}.</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
    </tr>
  )
}

export default Name
