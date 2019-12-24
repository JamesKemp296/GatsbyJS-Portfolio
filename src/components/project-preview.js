import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import "./project.css"
const ProjectPreview = ({ slug, title, description, imageData, sub }) => (
  <div className="project-preview">
    <Link to={`/${slug}/`}>
      <div className="project-image">
        <Image fluid={imageData} alt={title} className="preview-image" />

        <div className="overlay">
          <div className="text">{sub}</div>
        </div>
      </div>
    </Link>
    <div className="projects-text">
      <h2>
        <Link to={`/${slug}/`}>{title}</Link>
      </h2>
    </div>
  </div>
)

export default ProjectPreview
