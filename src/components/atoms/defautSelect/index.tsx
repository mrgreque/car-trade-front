/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DefaultSelectProps } from './types';

const DefaultSelect = (props: DefaultSelectProps) => {
  return (
    <Box
      style={{
        width: props.width ?? '100%',
      }}
    >
      <FormControl fullWidth size={props.size}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          value={props.inputValue}
          label={props.label}
          onChange={(e) => props.setDefaultInput(e.target.value)}
        >
          {props.valueOptions.map((option, index) => (
            <MenuItem key={`${option.value}${index}`} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

DefaultSelect.defaultProps = {
  ordening: 'min-price',
  handleDefaultSelect: () => {null},
  size: 'medium',
};

export default DefaultSelect;
