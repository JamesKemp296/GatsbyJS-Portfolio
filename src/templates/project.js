import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Project from '../components/project'

export const query = graphql`
  query($slug: String!){
    projectsJson(slug: {eq: $slug }) {
      title
      sub
      description
      url
      tech
      github
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  const title = project.title
  const sub = project.sub
  const description = project.description
  const url = project.url
  const imageData = project.image.childImageSharp.fluid
  const tech = project.tech
  const github = project.github

  return(
    <Layout>
      <Project
        title={title}
        sub={sub}
        description={description}
        url={url}
        tech={tech}
        github={github}
        imageData={imageData}
      />
    </Layout>
  )
}

export default ProjectTemplate
