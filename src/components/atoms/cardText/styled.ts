import styled from "styled-components";

const StyledCardText = styled.p<{ $small?: boolean }>`
  font-size: ${props => props.$small ? '0.8em' : '0.9em'};
  font-weight: 400;
  margin: 0 5px 0 0;
`;

export {
  StyledCardText
};
