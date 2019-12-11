import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import ProjectPrewview from '../components/project-preview'
import SEO from "../components/seo"

import '../components/layout.css'
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
      <SEO title="Portfolio" />
      <div className="container">
        <div className="portfolio-hero-wrapper">
          <div className="portfolio-hero">
            <div className="wiggle-flex">
              <h1 className="wiggle">F</h1>
              <h1 className="wiggle">u</h1>
              <h1 className="wiggle">l</h1>
              <h1 className="wiggle">l</h1>
              <h1 className="wiggle">-</h1>
              <h1 className="wiggle">S</h1>
              <h1 className="wiggle">t</h1>
              <h1 className="wiggle">a</h1>
              <h1 className="wiggle">c</h1>
              <h1 className="wiggle">k</h1>
              <h1 className="wiggle">&nbsp;D</h1>
              <h1 className="wiggle">e</h1>
              <h1 className="wiggle">v</h1>
              <h1 className="wiggle">e</h1>
              <h1 className="wiggle">l</h1>
              <h1 className="wiggle">o</h1>
              <h1 className="wiggle">p</h1>
              <h1 className="wiggle">e</h1>
              <h1 className="wiggle">r</h1>
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
