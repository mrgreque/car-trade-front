import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { OrdeningProps } from './types';

const Ordening = (props: OrdeningProps) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Ordenar</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.ordening}
          label="Age"
          onChange={() => props.handleOrdening}
        >
          <MenuItem value="min-price">Menor Preço</MenuItem>
          <MenuItem value="max-price">Maior Preço</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Ordening;
