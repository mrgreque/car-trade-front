import DefaultSelect from "../../atoms/defautSelect";
import { FilterActionsWrapper } from "./styled";
import { FilterActionsProps } from "./types";

const FilterActions = (props: FilterActionsProps) => {
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
        <DefaultSelect
          inputValue={props.order}
          label="Ordenar por"
          setDefaultInput={props.setOrder}
          valueOptions={[
            { value: 'ASC', label: 'Menor Preço' },
            { value: 'DESC', label: 'Maior Preço' },
          ]}
        />
      </article>
    </FilterActionsWrapper>
  );
};

export default FilterActions;
