import React from 'react'
import SEO from "../components/seo"
import Image from 'gatsby-image'
import "../globals.css"

const Project = ({ title, description, tech, github, url, imageData }) => (
  <>
    <SEO title={title} />
    <div className="project">
      <header className="project-header">
        <h1>{title}</h1>
        <h2>Subheader will go here, I'll make one</h2>
      </header>
      <div className="project-content">
        <div className="project-container">
          <Image fluid={imageData} alt={title}/>
          <p>{description}</p>
          <p>Tech used: {tech}</p>
          <p>
            <a href={url} target="_blank" rel="noopener noreferrer">View this project online</a>
          </p>
          <p>
            <a href={github} target="_blank" rel="noopener noreferrer">View this project on github</a>
          </p>
        </div>
      </div>
    </div>
  </>
)

export default Project
