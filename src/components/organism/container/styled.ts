import styled from "styled-components";

// this min-heigth calc is to avoid the footer to go up when the content is not enough
const StyledSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 100px);
`

const StyledDivContainer = styled.div`
  width: 95%;
  max-width: 1300px;
`

export {
  StyledSection,
  StyledDivContainer
}
