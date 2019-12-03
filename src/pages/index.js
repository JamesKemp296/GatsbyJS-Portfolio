import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import ProjectPrewview from '../components/project-preview'
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson{
        edges{
          node{
            title
            slug
            url
            description
            image{
              childImageSharp{
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges
  return(
    <Layout>
      <SEO title="Home" />
      <h1>What's up early bird, come back when the site is done!</h1>
      {projects.map(({ node: project }) => {
        const title = project.title
        const description = project.description
        const slug = project.slug
        const imageData = project.image.childImageSharp.fluid
        return(
          <ProjectPrewview
            title={title}
            description={description}
            imageData={imageData}
            slug={slug}
          />
        )
      })} 
    </Layout>
  )
}

export default IndexPage
