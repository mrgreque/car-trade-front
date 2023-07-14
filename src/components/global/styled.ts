import { styled } from "styled-components";

const Row = styled.div<{ margin?: string, width?: string, height?: string }>`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  margin: ${props => props.margin || '0'};
`

const SpacedRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
`

const CenteredRow = styled(Row)`
  justify-content: center;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Spacer = styled.div<{ width?: string, height?: string }>`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '100px'};
`

export {
  Row,
  Column,
  Spacer,
  SpacedRow,
  CenteredRow
}
