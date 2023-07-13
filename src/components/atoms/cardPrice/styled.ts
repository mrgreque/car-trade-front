import styled from "styled-components";

const StyledCardPrice = styled.p<{ $old?: boolean }>`
  font-size: ${props => props.$old ? '0.9rem' : '1.3rem'};
  font-weight: 600;
  color: ${props => props.$old ? '#000' : '#2488a7'};
  text-decoration: ${props => props.$old ? 'line-through' : 'none'};
  margin-right: 10px;
`;

export {
  StyledCardPrice
};
