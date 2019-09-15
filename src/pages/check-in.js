import React from "react"
import { Link } from "gatsby"

import Visitor from "../components/visitor"
import Badge from "../components/badge"
import BackBtn from "../components/back-button"
import Layout from "../components/layout/layout"

import "../components/check-in.css"

// const handleSubmit = e => {}

const CheckIn = () => (
  <Layout>
    <div className="check-in-page">
      <div className="visitor-div">
        <Badge />
        <div className="form-badge">
          <Visitor />
        </div>
      </div>
      <div className="form-btns">
        <Link to="/">
          <BackBtn>Back</BackBtn>
        </Link>
        <BackBtn>Submit</BackBtn>
      </div>
    </div>
  </Layout>
)

export default CheckIn
