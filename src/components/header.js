import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        style={{
          display: 'flex'
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Portfolio
          </Link>
        </h1>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/about"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            About
          </Link>
        </h1>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/skills"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Skills
          </Link>
        </h1>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/contact"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Contact
          </Link>
        </h1>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `James Kemp`,
}

export default Header
