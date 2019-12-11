import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/layout.css'
import "./about.css"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      allProfileJson{
        edges{
          node{
            title
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
  const profile = data.allProfileJson.edges[0].node
  console.log(profile)
  const title = profile.title
  const imageData = profile.image.childImageSharp.fluid
  return (
    <Layout>
      <SEO title="About" />
      <main>
        <article>
          <header className="about-header">
            <h1>About James</h1>
            <h2>Building high-quality websites with robust backends</h2>
          </header>
          <div className="about-content">
            <div className="about-container">
              <div id="about-summary">
                <div id="profile-image">
                  <Image
                    fluid={imageData}
                    alt={title}
                    style={{maxWidth: '150px'}}
                  />
                </div>
                <p>I am a Full-Stack Developer, graduate of Wyncode Academy, and a former chef at Margaritaville. I have 3 years of experience in a fast paced environment where I had to learn on my feet. I am now a Full-Stack Developer producing high quality responsive websites, working in both front end and back end.</p>
              </div>
              <div className="about-skills">
                <h5>Some of my skills are:</h5>
                <ul>
                  <li>Responsive HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>ReactJS</li>
                  <li>GatsbyJS</li>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>Ruby on Rails</li>
                  <li>MongoDB</li>
                  <li>GraphQL</li>
                  <li>MySQL</li>
                  <li>Git/Github</li>
                </ul>
                <p className="paragraph">I pride myself on producing the highest quality of work possible. I have a passion for continuing my learing and pushing the boundries of my knowledge.</p>
                <p className="paragraph">efkgnfdgjkaarfasdfae fgasd adfasdf asgasdgasdgsdgasgsdgasgsadasdfsdfasdf adsf asdf asdfajfasdfjkassdg ajgafdjragiafgragiaghafg aigagrgisdgargasgafdgafg eidfiasdfnasdf weifasdhfa efiasdfnasgaig</p>
                <p className="paragraph">wergkweg werg ewrgksdfg rgkfg rgkrg rgrogfoge eegdgetegd etoegewkasdf eog eroefenfekegofg rg grognegoegn gegoegneeoreofe egogneteogegnetoe ne eognegeognege</p>
                <h2>Full Stack Developer</h2>
                <p className="paragraph">asdfgjkasdfasdfasdfasdfasd fasd fasdfasdfbasdfasdfasd fasdjfbasdf asdjbergfg gfgfgfgfgfg fefasvrtgqrgadfgasdfasdf adsfasdfasdf asf asdf asdfasdfasdf eryadgfg rgafdgaasd faf adsfadsfadsfa dsfadsf adsf adsf afdag regdfg rgfg arega gar ga gar </p>
                <p className="paragraph">asdfgjkasdfasdfasdfasdfasd fasd fasdfasdfbasdfasdfasd fasdjfbasdf asdjbergfg gfgfgfgfgfg fefasvrtgqrgadfg eryadgfg rgafdgag regdfg rgfg arasdf asdf adsfadsfadfadsfa dsf asdfasdfadf adsf adf ad fadf adsfadsf adsfadsf adsf adsfega gar ga gar </p>
                <h2>ReactJS</h2>
                <p className="paragraph">asdfgjkasdfasdfasdfasdfasd fasd fasdfasdfbasdfasdfasd fasdjfbasdf asdjbergfg gfgfgfgfgfg fefasvrtgqrgadfg erasdfas dfasdfasdf asdfaf asdf asdf asdfa sdfasdfadfadf adfads fasdfasdfyadgfg rgafdgag regdfg rgfg arega gar ga gar </p>
                <p className="paragraph">asdfgjkasdfasdfasdfasdfasd fasd fasdfasdfbasdfasdfasd fasdjfbasdf asdjbergfg gfgfgfgfgfg fefasvrtgqrgadfg eryadgfg rgafdgag regdfg rgfg area sdfasdf asdf asdf asdf asdfa sdf asdfga gar ga gar </p>
                <p className="paragraph">asdfgjkasdfasdfasdfasdfasd fasd fasdfasdfbasdfasdfasd fasdjfbasdf asdjbergfg gfgfgfgfgfg fefasvrtgqrgadfg eryadgfg rgafdgag regdfg rgfg adf adfasdf adsf adf adf asf adf adfarega gar ga gar </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default About
