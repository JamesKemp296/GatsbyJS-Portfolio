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
    currentLang: "all",
    created: false,
    updated: false,
  }

  fetchGithub = () => {
    fetch(`https://api.github.com/users/JamesKemp296`)
      .then(res => res.json())
      .then(data => this.setState({ github: data }))
  }

  fetchRepos = () => {
    fetch(
      `https://api.github.com/users/JamesKemp296/repos?q=oauth&sort=created&order=desc`
    )
      .then(res => res.json())
      .then(data => this.setState({ repos: data, loading: false }))
  }

  handleSearch = search => {
    this.setState({ search })
  }

  handleLanguage = currentLang => {
    this.setState({ currentLang })
  }

  handleCreated = () => {
    this.setState({ created: !this.state.created })
    this.state.repos &&
      this.state.repos.sort((a, b) => {
        if (this.state.created) return a.created_at > b.created_at ? -1 : 1
        return a.created_at > b.created_at ? 1 : -1
      })
  }

  handleUpdated = () => {
    this.setState({ updated: !this.state.updated })
    this.state.repos &&
      this.state.repos.sort((a, b) => {
        if (this.state.updated) return a.updated_at > b.updated_at ? -1 : 1
        return a.updated_at > b.updated_at ? 1 : -1
      })
  }

  render() {
    const { github, repos, loading, currentLang, created, updated } = this.state
    let filteredRepos = repos
      .filter(repo => {
        return repo.name.toLowerCase().includes(this.state.search.toLowerCase())
      })
      .filter(repo => {
        if (currentLang === "all") return true
        if (currentLang === "CSS") return repo.language === null
        return repo.language === currentLang
      })
    let languages = []
    repos.forEach(repo => {
      languages.push(repo.language || "CSS")
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
              {!loading && (
                <div id="github-filters-container">
                  <input
                    id="github-search"
                    type="text"
                    name="search"
                    placeholder="Search"
                    autoComplete="off"
                    onChange={e => this.handleSearch(e.target.value)}
                    value={this.state.search}
                  />
                  <div id="github-filters">
                    <select
                      className="github-filter"
                      onChange={e => this.handleLanguage(e.target.value)}
                      onBlur={e => this.handleLanguage(e.target.value)}
                    >
                      <option value="all">All Languages</option>
                      {languages
                        .filter((v, i) => languages.indexOf(v) === i)
                        .map((language, i) => {
                          return (
                            <option key={i} value={language || "CSS"}>
                              {language || "CSS"}
                            </option>
                          )
                        })}
                    </select>
                    <button
                      className="github-filter"
                      onClick={this.handleCreated}
                    >
                      Created {created ? "(oldest)" : "(newest)"}
                    </button>
                    <button
                      className="github-filter"
                      onClick={this.handleUpdated}
                    >
                      Updated {updated ? "(oldest)" : "(newest)"}
                    </button>
                  </div>
                </div>
              )}
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
                      <p className="github-text">{repo.language || "CSS"}</p>
                      <div id="github-dates">
                        <p className="github-text">
                          Created:{" "}
                          {moment(repo.created_at)
                            .startOf("day")
                            .fromNow()}
                        </p>
                        <p className="github-text">
                          Updated:{" "}
                          {moment(repo.updated_at)
                            .startOf("day")
                            .fromNow()}
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
