import Ordening from "../../atoms/ordening";
import { FilterActionsWrapper } from "./styled";

const FilterActions = () => {
  return (
    <FilterActionsWrapper>
      <article>
        {/* <ButtonWithIcon
          disabled={false}
          icon={<FilterListIcon />}
          onClick={() => {console.log('Filtrar')}}
        >
          <span>Filtro</span>
        </ButtonWithIcon>
        <Button
          variant="text"
          onClick={() => {console.log('Limpar Filtros')}}
          disabled={false}
        >
          Limpar Filtros
        </Button> */}
      </article>
      <article>
        <Ordening
          ordening="min-price"
          handleOrdening={() => {console.log('Ordenar')}}
          size="small"
        />
      </article>
    </FilterActionsWrapper>
  );
};

export default FilterActions;
