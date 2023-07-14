import Grid from '@mui/material/Grid';
import Card from '../../molecules/card';
import { StyledGrid, StyledItem } from './styled';

const GridCars = () => {
  return (
    <StyledGrid container spacing={{ xs: 2, md: 1, sm: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(10)).map((_, index) => (
        <Grid item xs={8} sm={4} md={2} key={index}>
          <StyledItem>
            <Card
              car={{
                id: '1',
                name: 'Fusca',
                model: 'XEI',
                brand: 'Volkswagen',
                year: 1960,
                km: 100000,
                price: 10000,
                oldPrice: 20000,
                city: 'São Paulo',
                principalImage: 'https://motortudo.com/wp-content/uploads/2023/03/VW-Fusca-73-1300-11.webp',
                color: 'Azul',
                description: 'Fusca 1960 Azul',
                ports: 2,
                transmission: 'Manual',
                fuel: 'Gasolina',
                modelYear: 1960,
                motorPower: '1.0',
                paidIpva: true,
                paidLicensing: true,
                state: 'São Paulo',
              }}
              key={index}
            />
          </StyledItem>
        </Grid>
      ))}
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={8} sm={4} md={2} key={index}>
          <StyledItem>
            <Card
              car={{
                id: '1',
                name: 'Fusca',
                model: 'XEI',
                brand: 'Volkswagen',
                year: 1960,
                km: 100000,
                price: 10000,
                city: 'São Paulo',
                principalImage: 'https://motortudo.com/wp-content/uploads/2023/03/VW-Fusca-73-1300-11.webp',
                color: 'Azul',
                description: 'Fusca 1960 Azul',
                ports: 2,
                transmission: 'Manual',
                fuel: 'Gasolina',
                modelYear: 1960,
                motorPower: '1.0',
                paidIpva: true,
                paidLicensing: true,
                state: 'São Paulo',
              }}
              key={index}
            />
          </StyledItem>
        </Grid>
      ))}
    </StyledGrid>
  )
}

export default GridCars;
