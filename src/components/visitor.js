import React from "react"

import "./visitor.css"

const Visitor = () => {
  return (
    <div>
      <h3 className="visitor-badge">VISITOR</h3>
      <form className="form" name="submit-to-google-sheet" id="test-form">
        <select required name="Name" id="volunteersList">
          <option className="option-name" selected>
            Search for Your Name
          </option>
        </select>
        <div id="guestInput"></div>

        <br />

        <input
          required
          type="text"
          list="select"
          name="Location"
          id="class"
          placeholder="Choose Location or Teacher's Name"
        />
        <datalist class="location" id="select" name="Location">
          <option>-Choose Location or type in Teacher's Name-</option>
          <option value="Lunch Room"></option>
          <option value="Gymnasium"></option>
          <option value="Office"></option>
          <option value="Playground"></option>
        </datalist>

        <br />

        <textarea
          id="notes"
          name="Notes"
          placeholder="Reason for Visiting"
          rows="4"
        ></textarea>
      </form>
    </div>
  )
}

export default Visitor
