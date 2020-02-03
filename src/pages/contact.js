import React, { useState } from "react"
import validator from "validator"

import Layout from "../components/layout"
import ContactForm from "../components/ContactForm/ContactForm"
import SEO from "../components/seo"
import "../globals.css"
import "./contact.css"

const Contact = () => {
  const INITIAL_STATE = {
    name: "",
    email: "",
    message: "",
  }
  const INITIAL_ERROR_STATE = {
    name: "",
    email: "",
    message: "",
  }

  const [input, setInput] = useState(INITIAL_STATE)
  const [formErrors, setFormErrors] = useState(INITIAL_ERROR_STATE)
  const isInvalid = !input.name || !input.email || !input.message

  const handleInputChange = field => e => {
    setInput({ ...input, [field]: e.target.value })
    validateMessage()
  }

  const validateName = () => {
    if (input.name.length > 200) {
      setFormErrors({
        ...formErrors,
        name: "Name cannot be over 200 characters",
      })
    } else if (!input.name) {
      setFormErrors({
        ...formErrors,
        name: "Name is required",
      })
    } else {
      setFormErrors({
        ...formErrors,
        name: "",
      })
    }
  }
  const validateEmail = () => {
    if (input.email && !validator.isEmail(input.email)) {
      setFormErrors({
        ...formErrors,
        email: "Improper email",
      })
    } else if (!input.email) {
      setFormErrors({
        ...formErrors,
        email: "Email is required",
      })
    } else {
      setFormErrors({
        ...formErrors,
        email: "",
      })
    }
  }

  const validateMessage = () => {
    const worldLength = input.message.split(" ").length
    if (input.message.length > 2000) {
      setFormErrors({
        ...formErrors,
        message: "Message cannot be over 2,000 characters",
      })
    }
    if (worldLength > 200) {
      setFormErrors({
        ...formErrors,
        message: "Message cannot be over 200 words",
      })
    }
    if (worldLength < 200 && input.message.length < 2000) {
      setFormErrors({
        ...formErrors,
        message: "",
      })
    }
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="head-container">
        <h1>Contact James</h1>
        <h2>Send me a message</h2>
      </div>
      <div className="page-content">
        <div className="page-container">
          <h5 className="about-you">About You</h5>
          <ContactForm
            isInvalid={isInvalid}
            handleInputChange={handleInputChange}
            input={input}
            formErrors={formErrors}
            validateEmail={validateEmail}
            validateName={validateName}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Contact
