import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../globals.css"
import "./about.css"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      allProfileJson {
        edges {
          node {
            title
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
      allMarkdownRemark {
        edges {
          node {
            html
          }
        }
      }
    }
  `)
  let languages = data.allMarkdownRemark.edges[0].node.html
  const profile = data.allProfileJson.edges[0].node
  const title = profile.title
  const imageData = profile.image.childImageSharp.fluid
  return (
    <Layout>
      <SEO title="About" />
      <main>
        <article>
          <div className="head-container">
            <a
              className="title-link"
              href="https://www.linkedin.com/in/jamesdanielkemp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>About James</h1>
            </a>
            <h2>React, Gatsby and GraphQL enthusiast</h2>
          </div>
          <div className="page-content">
            <div className="page-container">
              <div id="about-summary">
                <div id="profile-image">
                  <Image
                    fluid={imageData}
                    alt={title}
                    style={{ maxWidth: "150px" }}
                  />
                </div>
                <p>
                  I am a Full-Stack Developer, graduate of Wyncode Academy, and
                  a former chef at Margaritaville. I have 3 years of experience
                  in a fast paced environment where I had to learn on my feet. I
                  am now a Full-Stack Developer producing high quality
                  responsive websites, working in both front end and back end.
                </p>
              </div>
              <div className="about-skills">
                <h5>My skills are:</h5>
                <section dangerouslySetInnerHTML={{ __html: languages }} />
                <p className="paragraph">
                  My name is James Kemp and I am a career changer. I have spent
                  the last 4 years as a chef at Margaritaville. I had a design
                  to find more fullfilling and creative work. During my search I
                  found myself at Wyncode Academy.
                </p>
                <p className="paragraph">
                  During my time at Wyncode, I've struggled and worked my way at
                  learnig a new skillset to launch my career in tech. I've
                  developed a passion for coding and have developed an interest
                  in modern web technologies such was React and GraphQL.
                </p>
                <p className="paragraph">
                  I pride myself on producing the highest quality of work
                  possible. I have a passion for continuing my learing and
                  pushing the boundries of my knowledge.
                </p>
                <h2>Full Stack Developer</h2>

                <p className="paragraph">
                  <Link to="/uses">This is my dev environment</Link>.<br></br>
                  Being a Full Stack Developer means I am capable of building
                  sites that both look fantastic and have fleshed out datamodels
                  on the backend. On the frontend, my primary library of choice
                  is React with some minor experience in Angular.{" "}
                </p>
                <p className="paragraph">
                  Backend technologies that I have worked in are Ruby on Rails
                  with a PostgreSQL database, expressJS with a mongodb database,
                  and Apollo with Prisma and a MySQL database.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default About
