import styled from 'styled-components'

const DarkButton = styled.button`
  background: ${props => props.theme.btnBackground};
  color: ${props => props.theme.btnFont};
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 3px 3px 7px 1px rgba(50, 50, 50, 0.75);
  width: 6rem;
  padding: 1rem;
  border: 0;
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  z-index: 5;
`

export default DarkButton
