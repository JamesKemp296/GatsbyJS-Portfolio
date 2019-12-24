import React from "react"
import moment from "moment"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../globals.css"
import "./github.css"

class Github extends React.Component {
  state = {
    loading: true,
    github: {},
    repos: [],
  }

  fetchGithub = () => {
    fetch(`https://api.github.com/users/JamesKemp296`)
      .then(res => res.json())
      .then(data => this.setState({ github: data }))
  }

  fetchRepos = () => {
    fetch(`https://api.github.com/users/JamesKemp296/repos`)
      .then(res => res.json())
      .then(data => this.setState({ repos: data, loading: false }))
  }

  render() {
    const { github, repos, loading } = this.state
    return (
      <Layout>
        <SEO title="Github" />
        <article>
          <div className="head-container">
            <a
              id="github-link"
              href={github.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>{loading ? "Loading" : github.login}</h1>
            </a>
            <h2>{loading ? "Fetching repos . . ." : github.bio}</h2>
          </div>
          <div className="page-content">
            <div className="page-container">
              <div id="repos">
                {repos.map(repo => (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={repo.id}
                  >
                    <div className="github-card">
                      <h5>{repo.name}</h5>
                      <p>{repo.language}</p>
                      <p>{moment(repo.created_at).format("LL")}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Layout>
    )
  }

  componentDidMount() {
    this.fetchGithub()
    this.fetchRepos()
  }
}

export default Github
