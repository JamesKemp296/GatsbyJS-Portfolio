import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import ProjectPrewview from '../components/project-preview'
import SEO from "../components/seo"

import "./index.css"

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
      <div className="portfolio-hero-wrapper">
        <div className="portfolio-hero">
          <h1>Full-Stack Developer</h1>
          <p>Lorum Ipsum and some more ipsum and something else. Also some more lorum but also some more ipsum and htat is all.</p>
        </div>
      </div>
      <div className="project-grid">
        {projects.map(({ node: project }, i) => {
          const title = project.title
          const description = project.description
          const slug = project.slug
          const imageData = project.image.childImageSharp.fluid
          return(
            <ProjectPrewview
              key={i}
              title={title}
              description={description}
              imageData={imageData}
              slug={slug}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
