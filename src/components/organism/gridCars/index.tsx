import Grid from '@mui/material/Grid';
import CarCard from '../../molecules/card';
import { StyledGrid, StyledItem } from './styled';
import { GridCarsProps } from './types';

const GridCars = (props: GridCarsProps) => {
  return (
    <StyledGrid container spacing={{ xs: 2, md: 1, sm: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {props.cars.map((car, index) => (
        <Grid item xs={8} sm={4} md={2} key={index}>
          <StyledItem>
            <CarCard car={car} />
          </StyledItem>
        </Grid>
      ))}
    </StyledGrid>
  )
}

export default GridCars;
