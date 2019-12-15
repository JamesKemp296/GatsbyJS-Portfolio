import styled from 'styled-components'

const ResumeBtn = styled.button`
  background: ${props => props.theme.btnBackground};
  color: ${props => props.theme.btnFont};
  text-transform: uppercase;
  font-weight: bold;
  width: 17rem;
  padding: 1rem;
  border: 0;
  z-index: 5;
`

export default ResumeBtn
