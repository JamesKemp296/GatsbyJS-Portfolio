import React from "react"

import Layout from "../components/layout"
import ContactForm from "../components/ContactForm/ContactForm"
import SEO from "../components/seo"
import "../globals.css"
import "./contact.css"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="head-container">
      <h1>Contact James</h1>
      <h2>Send me a message</h2>
    </div>
    <div className="page-content">
      <div className="page-container">
        <h5 className="about-you">About You</h5>
        <ContactForm />
      </div>
    </div>
  </Layout>
)

export default Contact
