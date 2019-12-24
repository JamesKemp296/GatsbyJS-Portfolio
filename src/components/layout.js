import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Resume from "../../data/James_Kemp_Resume_2019.pdf"
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
      <Header siteTitle={title} subTitle={subTitle} />
      <div ref={ref}>
        <main>{children}</main>
      </div>
      <footer>
        <div id="footer-top">
          <div>
            <a href={Resume} download>
              Download my Resume
            </a>
          </div>
          <div>|</div>
          <div>
            <div>
              <button onClick={handleClick} id="top-btn">
                Go back to the top
              </button>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <a
            href="https://twitter.com/jkempdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/JamesKemp296"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/jamesdanielkemp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
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
