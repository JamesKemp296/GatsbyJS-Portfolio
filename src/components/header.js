import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle, subTitle }) => (
  <header id="header-main">
    <div id="navbar-main">
      <div>
        <Link to="/">
          <h1 id="navbar-title">{siteTitle}</h1>
          <h2 id="navbarsub-title">{subTitle}</h2>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: `James Kemp`,
  subTitle: `Full-Stack Developer`
}

export default Header
