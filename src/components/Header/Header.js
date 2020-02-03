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
    <>
      <a
        href="#menu"
        className="toggle-button no-select"
        onClick={() => setToggled(!isToggled)}
        onKeyDown={() => setToggled(!isToggled)}
      >
        <span className={isToggled ? "bar1-small" : "bar1"}></span>
        <span className={isToggled ? "bar2-small" : "bar2"}></span>
        <span className={isToggled ? "bar3-small" : "bar3"}></span>
      </a>
      <header id="header-main">
        <div id="navbar-main">
          <div id="navbar-title-group">
            <Link to="/" className="no-select">
              <h1 id="navbar-title">{siteTitle}</h1>
              <h4 id="navbarsub-title">{subTitle}</h4>
            </Link>
          </div>
          <NavLinks isToggled={isToggled} />
        </div>
      </header>
    </>
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
