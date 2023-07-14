import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { OrdeningProps } from './types';

const Ordening = (props: OrdeningProps) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size={props.size}>
        <InputLabel>Ordenar</InputLabel>
        <Select
          value={props.ordening}
          label="Ordenar"
          onChange={() => props.handleOrdening}
        >
          <MenuItem value="min-price">Menor Preço</MenuItem>
          <MenuItem value="max-price">Maior Preço</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

Ordening.defaultProps = {
  ordening: 'min-price',
  handleOrdening: () => {null},
  size: 'medium',
};

export default Ordening;
