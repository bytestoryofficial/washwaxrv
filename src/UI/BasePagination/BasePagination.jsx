import RootPagination, { PaginationInner } from './BasePagination.styled';

const BasePagination = ({ onPaginate, totalPages, currentPageNo }) => {
  return (
    <RootPagination>
      <PaginationInner
        shape="rounded"
        onChange={onPaginate}
        count={totalPages || 2}
        page={currentPageNo}
      />
    </RootPagination>
  );
};

export default BasePagination;
