import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import "./thanks.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="thanks" />
    <div
      style={{
        height: "800px",
      }}
    >
      <div id="thanks-header">
        <h1>Message sent, thanks you!</h1>
        <Link>
          <button id="thanks-btn">BACK TO PORTFOLIO</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
