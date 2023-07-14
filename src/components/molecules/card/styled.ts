import { styled } from "styled-components";
import Card from '@mui/material/Card';

const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  transition: all 1s ease-in-out;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  };
  margin-top: 10px;
  cursor: pointer;
`
const StyledDescription = styled.section`
  width: calc(100% - 20px);
  padding: 10px;
`

export {
  StyledCard,
  StyledDescription
}
