import styled from 'styled-components'

const PageContent = styled.div`
  width: 100%;
  padding: 3rem 0;
  background: ${props => props.theme.contentMain};
  color: ${props => props.theme.fontColor};
`

const IndexContent = styled.div`
  width: 100%;
  padding: 3rem 0;
  background: ${props => props.theme.indexContent};
  color: ${props => props.theme.fontColor};
`

const IndexContainer = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 0 3rem;
`

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 720px;
  padding: 0 3rem;
  a {
    color: ${props => props.theme.fontColor};
  }
  a:visited {
    color: ${props => props.theme.fontColor};
  }
`

const HeadContainer = styled.header`
  display: grid;
  place-items: center;
  margin-bottom: 3rem;
  text-align: center;
`
const HeadMainText = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin: 3rem 0 0 0;
  padding: 0;
`

const HeadSubText = styled.h2`
  font-size: 2rem;
  margin: 0;
  padding: 1rem 0 0 0;
`

export { IndexContent, IndexContainer,PageContent, PageContainer, HeadContainer, HeadMainText, HeadSubText }
