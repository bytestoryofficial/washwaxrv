import { FormControl, styled, TextareaAutosize } from '@mui/material';
import palette from '../../../theme/palette';

const RootFormControl = styled(FormControl)(() => ({
  textAlign: 'left',
}));

const RootLabel = styled('div')(() => ({
  fontFamily: 'Montserrat',
  fontSize: 14,
  fontWeight: 500,
  marginBottom: 5,

  '@media (max-width: 768px)': {
    fontSize: 13,
    marginBottom: 5,
  },
}));

const RootBaseTextarea = styled(TextareaAutosize)(({ error }) => ({
  fontFamily: 'Montserrat',
  fontSize: 14,
  fontWeight: 400,
  backgroundColor: 'transparent',
  resize: 'none',
  border: error ? `1px solid #d32f2f` : '1px solid #D6E0EA',
  borderRadius: 10,
  color: palette.text,
  padding: '10px 15px',
  outline: 'none',
  transition: 'all .4s',

  '@media (max-width: 768px)': {
    fontSize: 13,
  },

  '&:focus': {
    borderColor: palette.secondary,
    borderWidth: '1px',
  },

  '& .Mui-error': {
    borderColor: '#FF5454',
  },
}));

const Suplabel = styled('span')(() => ({
  fontFamily: 'Montserrat',
  fontSize: 10,
  fontWeight: 400,
  marginBottom: 10,
  color: palette.text,
}));

export { RootFormControl, RootLabel, Suplabel };
export default RootBaseTextarea;
