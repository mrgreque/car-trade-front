import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

const StyledMain = styled.main`
  width: 100%;
  min-height: calc(100vh - 60px);
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const StyledDataGridSection = styled.section`
  width: 98%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: center;
`

const RowEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 98%;
  margin: 20px 0 0 0;
  max-width: 1300px;
`

const SyledDataGrid = styled(DataGrid)`
  width: 100%;
  margin: 20px 0;
`

export {
  StyledMain,
  SyledDataGrid,
  StyledDataGridSection,
  RowEnd
}
