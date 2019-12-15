import styled from 'styled-components'

const GithubCard = styled.div`
  text-align: center;
  width: 180px;
  min-height: 180px;
  margin: 1rem;
  background-color: ${props => props.theme.contentMain};
  display: inline-block;
  padding: 1.8rem;
  font-family: sans-serif;
  line-height: 1.5em;
  font-size: 1em;
  color: ${props => props.theme.fontColor};
  border: ${props => props.theme.border};
  border-radius: 5px;
  transition: 0.3s;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.bgMain};
  }
  @media only screen and (max-width: 720px) {
    width: 400px;
    min-height: 150px;
  }
`

export default GithubCard
