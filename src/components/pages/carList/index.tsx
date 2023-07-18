import axios from "axios";
import CardPagination from "../../atoms/pagination";
import { CenteredRow } from "../../global/styled";
import FilterActions from "../../molecules/filterActions";
import InternalContainer from "../../organism/container";
import GridCars from "../../organism/gridCars";
import { CarProps } from "./types";
import {useEffect, useState} from 'react';

function calculateTotalPages(totalRows: number, rowsPerPage: number): number {
  return Math.ceil(totalRows / rowsPerPage);
}

const CarList = () => {
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState<CarProps[] | []>([])
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    axios.post('http://localhost:3000/cars/paginated', {
      page,
      itemsPerPage: 30
    })
      .then((response: {
        data: {
          cars: CarProps[],
          total: number
        }
      }) => {
        console.log(response.data)
        setCars(response.data.cars)
        setTotalPages(calculateTotalPages(response.data.total, 30));
      })
      .catch((error) => {
        console.log(error)
      })
  }, [page])


  return (
    <main>
      {totalPages}
      <InternalContainer>
        <FilterActions />
        <GridCars cars={cars} />
        <CenteredRow margin="30px 0 0 0">
          <CardPagination current={page} total={totalPages} onChange={(newPage) => setPage(newPage)} />
        </CenteredRow>
      </InternalContainer>
    </main>
  );
};

export default CarList;
