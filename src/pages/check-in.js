import React from "react"
import { Link } from "gatsby"

import Visitor from "../components/visitor"
import BackBtn from "../components/back-button"
import Layout from "../components/layout/layout"

const SecondPage = () => (
  <Layout>
    <Visitor />
    <Link to="/">
      <BackBtn>Back</BackBtn>
    </Link>
    <BackBtn>Submit</BackBtn>
  </Layout>
)

export default SecondPage
