import React from "react"
import { Link } from "gatsby"

import HomeBtn from "../components/home-btn"
import Layout from "../components/layout/layout"

const IndexPage = () => (
  <Layout>
    <div className="home-btns">
      <Link to="/check-in">
        <HomeBtn>Check In</HomeBtn>
      </Link>
      <Link to="/">
        <HomeBtn>Check Out</HomeBtn>
      </Link>
    </div>
  </Layout>
)

export default IndexPage
