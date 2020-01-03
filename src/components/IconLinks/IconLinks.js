import React from "react"
import Resume from "../../../data/JamesKempResume_2020.pdf"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaCodepen } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

const IconLinks = () => {
  return (
    <>
      <div className="index-icons">
        <a
          href="https://github.com/JamesKemp296"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="index-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/jamesdanielkemp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="index-icon" />
        </a>
        <a
          href="https://codepen.io/James296"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCodepen className="index-icon" />
        </a>
        <a
          href="https://twitter.com/jkempdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="index-icon" />
        </a>
      </div>
      <a href={Resume} download>
        <button id="resume-btn">Download Resume</button>
      </a>
    </>
  )
}

export default IconLinks
