import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
import IconLinks from "./IconLinks/IconLinks"
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

  const ref = React.createRef()
  const handleClick = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const { title, subTitle } = data.site.siteMetadata
  return (
    <>
      <div ref={ref}></div>
      <Header siteTitle={title} subTitle={subTitle} />
      <div>
        <main>{children}</main>
      </div>
      <footer>
        <div id="back-to-top">
          <button onClick={handleClick} id="top-btn">
            Go back to the top
          </button>
        </div>
        <IconLinks />
        <div className="footer-bottom">
          © {new Date().getFullYear()}, {"Built with"}
          {"\xa0"}
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
