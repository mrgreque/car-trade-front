import Grid from '@mui/material/Grid';
import Card from '../../molecules/card';
import { StyledItem } from './styled';

const GridCars = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 2, sm: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={8} sm={4} md={3} key={index}>
          <StyledItem>
            <Card
              id='1'
              name='Fusca'
              model='Azul'
              brand='Volkswagen'
              year={1960}
              km={100000}
              price={10000}
              oldPrice={20000}
              image='https://motortudo.com/wp-content/uploads/2023/03/VW-Fusca-73-1300-11.webp'
              key={index}
            />
          </StyledItem>
        </Grid>
      ))}
    </Grid>
  )
}

export default GridCars;
