import React from "react"
import Name from "../components/name"
import "../components/name-list.css"
import { NAMES } from "../components/names"

const Admin = () => {
  const nameComponent = NAMES.map((name, i) => {
    return (
      <Name
        key={i}
        idx={i + 1}
        firstname={name.firstname}
        lastname={name.lastname}
      />
    )
  })

  return (
    <div className="name-list">
      <h1>List of Approved Names</h1>
      <hr />
      <p style={{ color: "red" }}>
        If your name is not on this list, please see the secretary about getting
        the appropriate paperwork to be an approved visitor. Thank you!
      </p>
      <hr />
      {nameComponent}
    </div>
  )
}

export default Admin
