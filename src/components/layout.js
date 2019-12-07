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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <main>{children}</main>
        <footer>
          <div className="footer-wrapper">
            <div className="footer-bio">
              <p>I guess this will my bio or something so this is just a bunch of lorum ipsum text and stuff.</p>
            </div>
            <div className="footer-links">
              <h4>I guess my twitter will go here or something</h4>
              <h4>This will be my github link I guess</h4>
              <h4>This will be my linkedin I guess too.</h4>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
