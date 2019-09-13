import React from "react"
import { Link } from "gatsby"

import BackBtn from "../components/back-button"
import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <Link to="/">
      <BackBtn>Back</BackBtn>
    </Link>
    <BackBtn>Submit</BackBtn>
  </Layout>
)

export default SecondPage
