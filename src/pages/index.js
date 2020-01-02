import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import IconLinks from "../components/iconLinks"
import ProjectPrewview from "../components/project-preview"
import SEO from "../components/seo"

import "../globals.css"
import "./index.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            sub
            slug
            url
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const ref = React.createRef()
  const handleClick = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const projects = data.allProjectsJson.edges
  const hero = "Full-Stack Developer"
  const split = hero.split("")
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className="container">
        <div className="portfolio-hero-wrapper">
          <div className="portfolio-hero">
            <div className="wiggle-flex">
              {split.map((letter, i) => (
                <h1 key={i} className="wiggle">
                  {letter === " " ? "\xa0" : letter}
                </h1>
              ))}
            </div>
            <p>
              Creating beautiful, highly interactive user interfaces in ReactJS
              with powerful and robust backends.
            </p>
            <IconLinks />
          </div>
        </div>
        <button id="portfolio-button" onClick={handleClick}>
          <h5 id="portfolio-button-text">VIEW PORTFOLIO</h5>
        </button>
        <h4 id="portfolio-button-chevron">&#xFE40;</h4>
      </div>
      <div id="index-content" ref={ref}>
        <div className="container">
          <div className="project-grid">
            {projects.map(({ node: project }, i) => {
              const title = project.title
              const sub = project.sub
              const description = project.description
              const slug = project.slug
              const imageData = project.image.childImageSharp.fluid
              return (
                <ProjectPrewview
                  key={i}
                  title={title}
                  sub={sub}
                  description={description}
                  imageData={imageData}
                  slug={slug}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
