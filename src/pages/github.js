import React from "react"
import moment from 'moment'
import { PageContent, PageContainer, HeadContainer, HeadMainText, HeadSubText } from '../styled/Page'
import Layout from "../components/layout"
import SEO from "../components/seo"
import GithubCard from '../styled/GithubCard'
import './github.css'

class Github extends React.Component {
  state = {
    loading: true,
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
    .then(data => this.setState({ repos: data, loading: false }))
  }

  render(){
    const { github, repos, loading } = this.state
    return(
      <Layout>
        <SEO title="Github" />
        <article>
          <HeadContainer>
            <a id="github-link" href={github.html_url} target="_blank" rel="noopener noreferrer">
              <HeadMainText>{loading ? 'Loading' : github.login }</HeadMainText>
            </a>
            <HeadSubText>{loading ? 'Fetching repos . . .' : github.bio}</HeadSubText>
          </HeadContainer>
          <PageContent>
            <PageContainer>
              <div id="repos">
                {
                  repos
                  .map(repo => (
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id}>
                      <GithubCard>
                        <h5>{repo.name}</h5>
                        <p>{repo.language}</p>
                        <p>{moment(repo.created_at).format('LL')}</p>
                      </GithubCard>
                    </a>
                  ))
                }
              </div>
            </PageContainer>
          </PageContent>
        </article>
      </Layout>
    )
  }

  componentDidMount(){
    this.fetchGithub()
    this.fetchRepos()
  }
}


export default Github
