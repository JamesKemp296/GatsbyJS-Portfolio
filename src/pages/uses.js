import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../globals.css"
import "./uses.css"

const Contact = () => {
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
    }
  `)
  const profile = data.allProfileJson.edges[1].node
  const title = profile.title
  const imageData = profile.image.childImageSharp.fluid
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="head-container">
        <h1>What I use</h1>
        <h2>This is my dev environment</h2>
      </div>
      <div className="page-content">
        <div className="page-container">
          <div className="uses-ide">
            <h2>IDE</h2>
            <p>
              I currently use VSCode with the Cobalt 2 theme created by Wes Bos.
            </p>
            <p>
              Check it our on{" "}
              <a href="https://github.com/wesbos/cobalt2-vscode">github</a>
            </p>
            <Image fluid={imageData} alt={title} />
            <p>
              My terminal is <a href="https://ohmyz.sh/">ohmyzsh</a> and my font
              is <a href="https://github.com/tonsky/FiraCode">Fira Code</a> with
              ligatures on.
            </p>
          </div>
          <div className="uses-software">
            <h2>Software</h2>
            <ul>
              <li>
                <b>Slack</b> I use slack to communicate with my colleagues at
                work.
              </li>
              <li>
                <b>Discord</b> Discord is for keep up with friends and other
                dev's. Gatsby has a really active and communicative discord
                server 😎
              </li>
              <li>
                <b>Git/Github</b>{" "}
                <a
                  href="https://github.com/JamesKemp296"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github{" "}
                </a>
                is what I use for version control. I've shortened some git
                commands for example <i>git checkout</i> is aliased to{" "}
                <i>gco</i>.
              </li>
            </ul>
            <div className="uses-specs">
              <h2>Computers and specs</h2>
              <p>
                I have two computers I use for coding. One is my laptop with
                Ubuntu and the other is a desktop that duel boots Ubuntu and
                Windows.
              </p>
              <h3>Lenovo Laptop</h3>
              <ul>
                <li>
                  <b>OS:</b> Ubuntu 18.04.3 LTS
                </li>
                <li>
                  <b>Display:</b> 15.6" Full HD
                </li>
                <li>
                  <b>CPU:</b> Intel Core i7-4700HQ
                </li>
                <li>
                  <b>GPU:</b> NVidia GeForce GTX 860M
                </li>
                <li>
                  <b>RAM:</b> 16GB DDR3.
                </li>
                <li>
                  <b>SSD:</b> Samsung 840 256gb
                </li>
              </ul>
              <h3>Desktop</h3>
              <ul>
                <li>
                  <b>OS:</b> Ubuntu 18.04.3 LTS / Windows 10
                </li>
                <li>
                  <b>Motherboard:</b> ASUS X470-I
                </li>
                <li>
                  <b>CPU:</b> AMD Ryzen 2700X
                </li>
                <li>
                  <b>GPU:</b> NVidia GeForce GTX 1070
                </li>
                <li>
                  <b>RAM:</b> 16GB DDR4.
                </li>
                <li>
                  <b>SSD:</b> Samsung 960 Pro 500gb NVME
                </li>
                <li>
                  <b>hard Drive:</b> Seagate Barracuda 2 TBI
                </li>
                <li>
                  <b>Power Supply:</b> Seasonic Focus+ 650W
                </li>
              </ul>
              <h3>Equipment</h3>
              <ul>
                <li>
                  <b>Case:</b> NZXT H200i
                </li>
                <li>
                  <b>Monitors:</b> ASUS VQ248QE x3
                </li>
                <li>
                  <b>Keyboard:</b> Corsair K65
                </li>
                <li>
                  <b>Mouse</b> Steelseries Rival 300
                </li>
                <li>
                  <b>headset</b> Sennheiser HD 599
                </li>
              </ul>
            </div>
            <div>
              <h1>And most importantly</h1>
              <p>I use stack overflow</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
