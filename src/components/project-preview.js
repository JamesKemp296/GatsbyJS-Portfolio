import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import './project.css'
const ProjectPreview = ({ slug, title, description, imageData, }) => (
  <div className="project-preview">
    <div className="project-image grow">
      <Link to={`/${slug}/`}>
        <Image fluid={imageData} alt={title} className="preview-image-grow"/>
      </Link>
    </div>
    <div className="projects-text">
      <h2>
        <Link to={`/${slug}/`}>{title}</Link>
      </h2>
    </div>
  </div>
)

export default ProjectPreview
