import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './github.css'

class Github extends React.Component {
  state = {
    github: {},
    repos: []
  }
  fetchGithub = () => {
    fetch(`https://api.github.com/users/JamesKemp296`)
    .then(res => res.json())
    .then(data => this.setState({ github: data }))
  }

  fetchRepos = () => {
    fetch(`https://api.github.com/users/JamesKemp296/repos`)
    .then(res => res.json())
    .then(data => this.setState({ repos: data }))
  }

  render(){
    console.log(repos)
    console.log(github)
    return(
      <Layout>
        <SEO title="Github" />
        <div className="cool-stuff">
          <h1>Placeholder text</h1>
          <p>Mad Skillz</p>
        </div>
      </Layout>
    )
  }

  // componentDidMount(){
  //   this.fetchGithub()
  //   this.fetchRepos()
  // }
}


export default Github
