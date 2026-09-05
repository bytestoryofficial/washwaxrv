import { Pagination, styled } from '@mui/material';
import palette from '../../theme/palette';

const RootPagination = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 0 10px',
}));

const PaginationInner = styled(Pagination)(() => ({
  button: {
    minWidth: 26,
    height: 26,
    fontFamily: 'Montserrat',
    fontSize: 14,
    borderRadius: 5,
    transition: 'all .3s',

    '&.Mui-selected': {
      backgroundColor: palette.secondary,
      color: '#fff',
      '&:hover': {
        backgroundColor: palette.secondary,
        color: '#fff',
      },
    },
    '&:hover': {
      backgroundColor: palette.secondary,
      color: '#fff',
    },
  },
}));

export { PaginationInner };
export default RootPagination;
