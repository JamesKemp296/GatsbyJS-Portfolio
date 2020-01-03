import React from "react"
import SEO from "../seo"
import Image from "gatsby-image"
import "../../globals.css"

const Project = ({ title, description, tech, github, url, imageData, sub }) => (
  <>
    <SEO title={title} />
    <div className="project">
      <div className="head-container">
        <h1>{title}</h1>
        <h2>{sub}</h2>
      </div>
      <div className="page-content">
        <div className="page-container">
          <Image fluid={imageData} alt={title} />
          <p>{description}</p>
          <p>Tech used: {tech}</p>
          <p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              View this project online
            </a>
          </p>
          <p>
            <a href={github} target="_blank" rel="noopener noreferrer">
              View this project on github
            </a>
          </p>
        </div>
      </div>
    </div>
  </>
)

export default Project
