import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from "./header"
import "../globals.css"

const light = {
  bgMain: '#3B98D1',
  contentMain: 'white',
  fontColor: 'black',
}

const dark = {
  bgMain: '#4B83FF',
  contentMain: '#183549',
  fontColor: '#96F1F2',
}

const Layout = ({ children }) => {

  const [isDark, setDark] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subTitle
          author
          description
        }
      }
    }
  `)

  const GlobalStyle = createGlobalStyle`
    body {
      background: ${props => (isDark ? '#131D27' : '#3B98D1')};
    }
    footer {
      background: ${props => (isDark ? 'black' : '#222222')};
    }
    input {
      background: ${props => (isDark ? '#183549' : 'white')};
      border: ${props => (isDark ? '1px solid #96F1F2 ' : '1px solid grey')};
      color: ${props => (isDark ? '#96F1F2 ' : '')};
    }
    #message {
      background: ${props => (isDark ? '#183549' : 'white')};
      border: ${props => (isDark ? '1px solid #96F1F2 ' : '')};
      color: ${props => (isDark ? '#96F1F2 ' : '1px solid grey')};
    }
  `

  const { title, subTitle } = data.site.siteMetadata
  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <Header siteTitle={title} subTitle={subTitle} />
      <div>
        <main>
          {children}
        </main>
      </div>
      <button
        id="dark-mode-btn"
        onClick={() => setDark(!isDark)}
      >
        Dark Mode
      </button>
      <footer>
        <div className="footer-links">
          <a href="https://twitter.com/jkempdev" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://github.com/JamesKemp296" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://www.linkedin.com/in/jamesdanielkemp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()}, {'Built with'}{"\xa0"}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
