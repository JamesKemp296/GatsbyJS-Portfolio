import { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavLinks from "./NavLinks"
import "../../globals.css"
import "./Header.css"

const Header = ({ siteTitle, subTitle }) => {
  const [isToggled, setToggled] = useState(false)

  return (
    <header id="header-main">
      <div id="navbar-main">
        <div id="navbar-title-group">
          <Link to="/">
            <h1 id="navbar-title">{siteTitle}</h1>
            <h4 id="navbarsub-title">{subTitle}</h4>
          </Link>
        </div>
        <a
          href="#menu"
          className="toggle-button"
          onClick={() => setToggled(!isToggled)}
          onKeyDown={() => setToggled(!isToggled)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <NavLinks isToggled={isToggled} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `James Kemp`,
  subTitle: `Full-Stack Developer`,
}

export default Header