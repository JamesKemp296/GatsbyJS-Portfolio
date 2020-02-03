import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import IconLinks from "../components/IconLinks/IconLinks"
import ProjectPrewview from "../components/Project/project-preview"
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
  const fullStack = "Full-Stack".split("")
  const developer = " Developer".split("")
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className="container">
        <div className="portfolio-hero-wrapper">
          <div className="portfolio-hero">
            <div className="hero-title-wrapper">
              <h1 className="hero-letters">
                {fullStack.map((letter, i) => (
                  <span key={i} className="wiggle">
                    {letter === " " ? "\xa0" : letter}
                  </span>
                ))}
              </h1>
              <h1 className="hero-letters">
                {developer.map((letter, i) => (
                  <span key={i + "dev"} className="wiggle">
                    {letter === " " ? "\xa0" : letter}
                  </span>
                ))}
              </h1>
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
        <div id="index-breakpoint"></div>
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
