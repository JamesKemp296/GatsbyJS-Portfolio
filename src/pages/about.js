import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/layout.css'
import profile from '../../data/images/profile.png'
import "./about.css"

const About = () => (
  <Layout>
    <SEO title="About" />
    <main>
      <article>
        <header className="about-header">
          <h1>About James</h1>
          <h2>Building high-quality websites with robust backends</h2>
        </header>
        <div className="about-content">
          <div className="container">
            <div id="about-summary">
              <img className="profile" src={profile} alt="James Kemp"/>
              <p>a sdgadfgadfgdfgjasndf SDFJUIOSDfljSD SDjfiSDLF alijsdfljknasdf asdlknl;asdr lksdf na sdflkjasd aslkdfb asd falksdjf df a;kjsdfn; a sdfa sdfkjadsf asdfs ji</p>
            </div>
            <div className="about-skills">
              <ul>
                <li>Responsive HTML/CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>GatsbyJS</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>Ruby on Rails</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Git/Github</li>
              </ul>
              <p>wrtghghsdfgsert sdrgsreg sdfg regserfg sdfg reg sdfgsrgsdfg sreg sdfg sdfg serg sdfgsdfg rgsdfg gsdfg rg sdfg rtg sdfg rg sdfg rgsdfg </p>
              <p>wrtghghsdfgsert sdrgsreg sdfg regserfg sdfg reg sdfgsrgsdfg sreg sdfg sdfg serg sdfgsdfg rgsdfg gsdfg rg sdfg rtg sdfg rg sdfg rgsdfg </p>
              <p>wrtghghsdfgsert sdrgsreg sdfg regserfg sdfg reg sdfgsrgsdfg sreg sdfg sdfg serg sdfgsdfg rgsdfg gsdfg rg sdfg rtg sdfg rg sdfg rgsdfg </p>
              <h2>Full Stack Developer</h2>
              <p>qaertwertwertewrkjtwer askldjfnlwae alsdlf;ansdf ewf alskdjfn ef ja;sdf ef asdfj eaefja</p>
              <p>qaertwertwertewrkjtwer askldjfnlwae alsdlf;ansdf ewf alskdjfn ef ja;sdf ef asdfj eaefja</p>
              <h2>ReactJS</h2>
              <p>qaertwertwertewrkjtwer askldjfnlwae alsdlf;ansdf ewf alskdjfn ef ja;sdf ef asdfj eaefja</p>
              <p>qaertwertwertewrkjtwer askldjfnlwae alsdlf;ansdf ewf alskdjfn ef ja;sdf ef asdfj eaefja</p>
              <p>qaertwertwertewrkjtwer askldjfnlwae alsdlf;ansdf ewf alskdjfn ef ja;sdf ef asdfj eaefja</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  </Layout>
)

export default About
