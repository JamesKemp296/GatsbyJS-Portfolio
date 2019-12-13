import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import './project.css'
const ProjectPreview = ({ slug, title, description, imageData, }) => (
  <div className="project-preview">
    <div className="project-image">
      <Link to={`/${slug}/`}>
        <Image fluid={imageData} alt={title} className="grow"/>
      </Link>
    </div>
    <div className="projects-text">
      <h2>
        <Link to={`/${slug}/`}>{title}</Link>
      </h2>
      <p className="project-description">{description}</p>
    </div>
  </div>
)

export default ProjectPreview
