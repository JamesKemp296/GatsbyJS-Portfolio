import React from "react"
import { Link } from "gatsby"
const Links = (props) => (
  <ul className={props.isToggled ? 'navbar-links active' : 'navbar-links'}>
    <li><Link to="/">Portfolio</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/github">Github</Link></li>
    <li><Link to="/contact" >Contact</Link></li>
  </ul>
)

export default Links
