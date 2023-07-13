import FilterActions from "../../molecules/filterActions";
import InternalContainer from "../../organism/container";
import GridCars from "../../organism/gridCars";
import { Props } from "./types";

const CarList = (props: Props) => {
  return (
    <main>
      <InternalContainer>
        <FilterActions />
        <GridCars />
      </InternalContainer>
    </main>
  );
};

export default CarList;
