import styled from 'styled-components';

const StyledButtonWithIcon = styled.button<{ width?: string, height?: string, color?: string }>`
  background-color: ${props => props.color === 'primary' ? '#5cabd8' : 'transparent'};
  color: ${props => props.color === 'primary' ? '#fff' : '#5cabd8'};
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #5cabd8;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${props => props.color === 'primary' ? '#4588af' : 'transparent'};
    color: ${props => props.color === 'primary' ? '#fff' : '#4588af'};
    border: 2px solid #4588af;
  }
`;

export { StyledButtonWithIcon };
