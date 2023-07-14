import Pagination from '@mui/material/Pagination';
import { CardPaginationProps } from './types';

const CardPagination = (props: CardPaginationProps) => {
  return (
    <div>
      <Pagination count={props.total} showFirstButton showLastButton />
    </div>
  );
};

export default CardPagination;
