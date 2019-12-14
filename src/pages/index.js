import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import ProjectPrewview from '../components/project-preview'
import SEO from "../components/seo"

import "../globals.css"
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
  const hero = "Full-Stack Developer"
  const split = hero.split("")
  return(
    <Layout>
      <SEO title="Portfolio" />
      <div className="container">
        <div className="portfolio-hero-wrapper">
          <div className="portfolio-hero">
          <div className="wiggle-flex">
              {
                split.map((letter, i) => (
                  <h1 key={i} className="wiggle">{letter === " " ? "\xa0" : letter}</h1>
                ))
              }
            </div>
            <p>
              Creating beautiful, highly interactive user interfaces in ReactJS with powerful and robust backends.
            </p>
          </div>
        </div>
        <div id="portfolio-button">
          <h5 id="portfolio-button-text">VIEW PORTFOLIO</h5>
          <h4 id="portfolio-button-chevron">&#xFE40;</h4>
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
