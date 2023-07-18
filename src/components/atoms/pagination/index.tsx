import Pagination from '@mui/material/Pagination';
import { CardPaginationProps } from './types';

const CardPagination = (props: CardPaginationProps) => {
  return (
    <div>
      <Pagination
        count={props.total}
        showFirstButton
        showLastButton
        onChange={(_, page) => props.onChange(page)}
      />
    </div>
  );
};

export default CardPagination;
