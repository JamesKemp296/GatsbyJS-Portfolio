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
    search: "",
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

  handleSearch = search => {
    this.setState({ search })
  }

  render() {
    const { github, repos, loading } = this.state
    let filteredRepos = repos.filter(repo => {
      return repo.name.toLowerCase().includes(this.state.search)
    })
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
              <div id="github-filters">
                <input
                  id="github-search"
                  type="text"
                  name="search"
                  placeholder="Search"
                  autoComplete="off"
                  onChange={e => this.handleSearch(e.target.value)}
                  value={this.state.search}
                />
              </div>
              <div id="repos">
                {filteredRepos.map(repo => (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={repo.id}
                  >
                    <div className="github-card">
                      <h5>{repo.name}</h5>
                      <p className="github-text">{repo.language}</p>
                      <div id="github-dates">
                        <p className="github-text">
                          Created: {moment(repo.created_at).format("L")}
                        </p>
                        <p className="github-text">
                          Updated: {moment(repo.updated_at).format("L")}
                        </p>
                      </div>
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
