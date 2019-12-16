import React from 'react'
import SEO from "../components/seo"
import Image from 'gatsby-image'
import "../globals.css"
import { PageContent, PageContainer, HeadContainer, HeadMainText, HeadSubText } from '../styled/Page'


const Project = ({ title, description, tech, github, url, imageData, sub }) => (
  <>
    <SEO title={title} />
    <div className="project">
      <HeadContainer>
        <HeadMainText>{title}</HeadMainText>
        <HeadSubText>{sub}</HeadSubText>
      </HeadContainer>
      <PageContent>
        <PageContainer>
          <Image fluid={imageData} alt={title}/>
          <p>{description}</p>
          <p>Tech used: {tech}</p>
          <p>
            <a href={url} target="_blank" rel="noopener noreferrer">View this project online</a>
          </p>
          <p>
            <a href={github} target="_blank" rel="noopener noreferrer">View this project on github</a>
          </p>
        </PageContainer>
      </PageContent>
    </div>
  </>
)

export default Project
