import ButtonWithIcon from "../../atoms/buttonWithIcon";
import FilterListIcon from '@mui/icons-material/FilterList';
import { Button } from "@mui/material";
import Ordening from "../../atoms/ordening";
import { FilterActionsWrapper } from "./styled";

const FilterActions = () => {
  return (
    <FilterActionsWrapper>
      <article>
        <ButtonWithIcon
          disabled
          icon={<FilterListIcon />}
          onClick={() => {console.log('Filtrar')}}
        >
          <span>Filtro</span>
        </ButtonWithIcon>
        <Button
          variant="contained"
          onClick={() => {console.log('Limpar Filtros')}}
          disabled={false}
        >
          Limpar Filtros
        </Button>
      </article>
      <article>
        <Ordening
          ordening="min-price"
          handleOrdening={() => {console.log('Ordenar')}}
        />
      </article>
    </FilterActionsWrapper>
  );
};

export default FilterActions;
