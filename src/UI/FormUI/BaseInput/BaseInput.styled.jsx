import { FormControl, styled, TextField } from '@mui/material';
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

const RootBaseInput = styled(TextField)(() => ({
  fontFamily: 'Montserrat',
  width: '100%',
  transition: 'all .4s',

  '& .MuiInputBase-root': {
    borderRadius: '10px',
    '&:hover': {
      fieldset: {
        borderColor: palette.text,
      },
    },
  },

  '& .MuiInputBase-input': {
    minHeight: 40,
    fontFamily: 'Montserrat',
    fontSize: '14px',

    '@media (max-width: 768px)': {
      fontSize: 13,
      minHeight: 34,
    },
  },

  '& .Mui-focused': {
    fieldset: {
      borderWidth: '1px !important',
      borderColor: palette.text + '!important',
    },
  },

  '& .Mui-error': {
    fieldset: {
      borderColor: '#FF5454',
    },
  },

  fieldset: {
    transition: 'all .4s',
    outline: 'none',
    borderColor: '#D6E0EA',
  },
}));

export { RootFormControl, RootLabel };
export default RootBaseInput;
