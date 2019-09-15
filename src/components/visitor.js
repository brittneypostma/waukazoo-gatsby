import React from "react"

// import { NAMES } from "./NAMES"
import "./visitor.css"
// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbzrKqVJEidj98LDaebjqwQX4Ti5tjvWcx52oLBrQwKqDH29_uo/exec"
// const form = document.forms["submit-to-google-sheet"]

// form.addEventListener("submit", e => {
//   e.preventDefault()

//   fetch(scriptURL, {
//     method: "POST",
//     body: new FormData(form),
//   })
//   document.getElementById("test-form").reset()
//   window.setTimeout(function() {
//     window.location.href = "index.html"
//   }, 2000)
//   return
// })

const Visitor = () => {
  // const [names, setNames] = React.useState({ firstname: "", lastname: "" })

  // const handleChange = e => {
  //   const { value, name } = e.target
  //   setNames({ [name]: value })
  // }

  // let volunteersList = NAMES.map((name, i) => {
  //   return (
  //     <option key={i} value={name.id}>
  //       {name.firstname} {name.lastname}
  //     </option>
  //   )
  // })

  // names

  return (
    <div>
      <h3 className="visitor-badge">VISITOR</h3>
      <form className="form" name="submit-to-google-sheet" id="test-form">
        <label>
          <select required name="Name" id="volunteersList">
            <option className="option-name">Search for Your Name</option>
          </select>
        </label>
        <div id="guestInput"></div>

        <br />
        <label className="teacher">
          <input
            required
            type="text"
            list="select"
            name="Location"
            id="class"
            placeholder="Choose Location or Teacher's Name"
          />
          <datalist className="location" id="select" name="Location">
            <option>-Choose Location or type in Teacher's Name-</option>
            <option value="Lunch Room"></option>
            <option value="Gymnasium"></option>
            <option value="Office"></option>
            <option value="Playground"></option>
          </datalist>
        </label>
        <br />
        <label className="notes">
          <textarea
            id="notes"
            name="Notes"
            placeholder="Reason for Visiting"
            rows="4"
          ></textarea>
        </label>
      </form>
    </div>
  )
}

export default Visitor
