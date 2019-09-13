import { Link } from "gatsby"
import React from "react"
import Name from "../components/name"
import BackBtn from "../components/back-button"
import "../components/name-list.css"
import { NAMES } from "../components/NAMES"

const Help = () => {
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
    <div className="help-page">
      <Link to="/">
        <BackBtn>Back</BackBtn>
      </Link>
      <br />
      <h1>List of Approved Names</h1>
      <hr />
      <p style={{ color: "red" }}>
        If your name is not on this list, please see the secretary about getting
        the appropriate paperwork to be an approved visitor. Thank you!
      </p>

      <hr />
      <div className="table">
        <table>
          <thead>
            <tr className="table-head">
              <th>&nbsp;&nbsp;&nbsp;#</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>

          <tbody>{nameComponent}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Help
