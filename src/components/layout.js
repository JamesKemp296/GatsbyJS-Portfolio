import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../globals.css"

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
      <div>
        <main>{children}</main>
      </div>
      <footer>
        <div className="footer-links">
          <a href="https://twitter.com/jkempdev" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://github.com/JamesKemp296" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://www.linkedin.com/in/jamesdanielkemp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()}, {'Built with'}{"\xa0"}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
