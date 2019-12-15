import styled from 'styled-components'

const GithubCard = styled.button`
  width: 220px;
  margin: 1rem;
  background-color: ${props => props.theme.contentMain};
  display: inline-block;
  padding: 30px;
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
`

export default GithubCard
