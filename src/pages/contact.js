import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageContent, PageContainer, HeadContainer, HeadMainText, HeadSubText } from '../styled/Page'
import "./contact.css"
import "../globals.css"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <HeadContainer>
      <HeadMainText>Contact James</HeadMainText>
      <HeadSubText>Send me a message</HeadSubText>
    </HeadContainer>
    <PageContent>
      <PageContainer>
        <h5 className="about-you">About You</h5>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="contact-form"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="field half first">
            <label htmlFor="name">Your name<span className="red-span">*</span></label>
            <input type="text" name="name" id="name" placeholder="eg. James Kemp" required/>
          </div>
          <div className="field half">
            <label htmlFor="email">Email address<span className="red-span">*</span></label>
            <input type="text" name="email" id="email" placeholder="eg. person@email.com" required/>
          </div>
          <div className="field">
            <label htmlFor="message">Message<span className="red-span">*</span></label>
            <textarea name="message" id="message" rows="6" required/>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="SEND" className="special submit-button" />
            </li>
            <li>
              <input type="reset" value="CLEAR" className="clear-button"/>
            </li>
          </ul>
        </form>
      </PageContainer>
    </PageContent>
  </Layout>
)

export default Contact
