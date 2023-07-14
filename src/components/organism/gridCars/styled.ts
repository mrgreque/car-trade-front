import Item from '@mui/material/Grid';
import Grid from '@mui/material/Grid';
import { styled } from 'styled-components';

const StyledItem = styled(Item)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledGrid = styled(Grid)`
  min-height: calc(100vh - 100px - 460px);
`

export {
  StyledItem,
  StyledGrid
}
