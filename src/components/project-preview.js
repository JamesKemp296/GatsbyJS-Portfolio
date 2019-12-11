import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import './projects.css'
const ProjectPreview = ({ slug, title, description, imageData, }) => (
  <div className="project-preview">
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} className="grow"/>
    </Link>
    <div className="projects-text">
      <h2>
        <Link to={`/${slug}/`}>{title}</Link>
      </h2>
      <p className="project-description">{description}</p>
      <p>
        <Link to={`/${slug}/`}>View this project &rarr;</Link>
      </p>
    </div>
  </div>
)

export default ProjectPreview
