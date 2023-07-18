import styled from "styled-components"

const InColumnForm = styled.form<{ width?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
  padding: 0;
  width: ${props => props.width || 'auto'};
`

export {
  InColumnForm
}
