import CardPagination from "../../atoms/pagination";
import { CenteredRow } from "../../global/styled";
import FilterActions from "../../molecules/filterActions";
import InternalContainer from "../../organism/container";
import GridCars from "../../organism/gridCars";
import { Props } from "./types";
import {useState} from 'react';

const CarList = (props: Props) => {
  const [page, setPage] = useState(1)

  return (
    <main>
      <InternalContainer>
        <FilterActions />
        <GridCars />
        <CenteredRow margin="30px 0 0 0">
          <CardPagination current={page} total={10} onChange={(newPage) => setPage(newPage)} />
        </CenteredRow>
      </InternalContainer>
    </main>
  );
};

export default CarList;
