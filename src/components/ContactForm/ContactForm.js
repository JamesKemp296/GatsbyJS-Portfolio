import React from "react"

const ContactForm = ({
  validateEmail,
  validateName,
  input,
  isInvalid,
  handleInputChange,
  formErrors,
}) => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="contact-form"
      action="/thanks"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="field half first">
        <label htmlFor="name">
          Your name
          <span className="red-span">
            *{formErrors.name ? ` ${formErrors.name}` : ""}
          </span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="eg. James Kemp"
          onChange={handleInputChange("name")}
          onBlur={validateName}
          value={input.name}
          required
        />
      </div>
      <div className="field half">
        <label htmlFor="email">
          Email address
          <span className="red-span">
            *{formErrors.email ? ` ${formErrors.email}` : ""}
          </span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="eg. person@email.com"
          onChange={handleInputChange("email")}
          onBlur={validateEmail}
          value={input.email}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="message">
          Message
          <span className="red-span">
            *{formErrors.message ? ` ${formErrors.message}` : ""}
          </span>
        </label>
        <textarea
          onChange={handleInputChange("message")}
          value={input.message}
          name="message"
          id="message"
          rows="6"
          required
        />
      </div>
      <ul className="actions">
        <li>
          <input
            style={isInvalid ? { background: "#888888", cursor: "unset" } : {}}
            type="submit"
            value="SEND"
            className="special submit-button"
            disabled={isInvalid}
          />
        </li>
        <li>
          <input type="reset" value="CLEAR" className="clear-button" />
        </li>
      </ul>
    </form>
  )
}

export default ContactForm
