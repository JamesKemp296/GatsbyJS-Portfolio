import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <main>
      <article>
        <header className="about-header">
          <h1>About James</h1>
          <h2>Building high-quality websites with robust backends</h2>
        </header>
        <div className="about-content">
          <p>Placeholder Text</p>
        </div>
      </article>
    </main>
  </Layout>
)

export default About
