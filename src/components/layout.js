import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subTitle
          author
          description
        }
      }
    }
  `)

  const { title, subTitle } = data.site.siteMetadata
  return (
    <>
      <Header siteTitle={title} subTitle={subTitle} />
      <div id="main-content">
        <main>{children}</main>
      </div>
      <footer>
        <div className="footer-outer">
          <div className="footer-wrapper">
            <div className="footer-bio">
              <p>I guess this will my bio or something so this is just a bunch of lorum ipsum text and stuff.</p>
            </div>
            <div className="footer-links">
              <p>Follow <a href="https://twitter.com/jkempdev" target="_blank" rel="noopener noreferrer">@jkempdev</a> on twitter for web development tips, opinions and fun.</p>
              <p>View <a href="https://github.com/JamesKemp296" target="_blank" rel="noopener noreferrer">@JamesKemp296</a> on GitHub for all of my open source projects.</p>
              <p>View my <a href="https://www.linkedin.com/in/jamesdanielkemp/" target="_blank" rel="noopener noreferrer">LinkedIn</a> profile.</p>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()}, {'Built with'}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
