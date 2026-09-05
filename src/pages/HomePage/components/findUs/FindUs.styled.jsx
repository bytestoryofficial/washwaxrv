import { Box, styled } from '@mui/material';
import palette from 'theme/palette';

const FindUsRoot = styled(Box)(() => ({
  padding: '60px 0 0px',
}));

const FindUsContactsWrapper = styled(Box)(() => ({
  backgroundColor: palette.secondary,
}));

const FindUsContacts = styled(Box)(() => ({
  marginTop: 20,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-evenly',
  fontSize: 24,
  padding: '10px 0',

  '@media(max-width: 768px)': {
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: 18,
    gap: 10,
  },

  '@media(max-width: 480px)': {
    fontSize: 15,
  },
}));

const FindUsInfoWrapper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
}));

const FindUsChild = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',

  p: {
    margin: 0,
    color: palette.primary,
    opacity: 0.7,
    fontSize: 13,
    lineHeight: 1.2,
  },

  a: {
    color: palette.primary,
    lineHeight: 1.2,
    fontSize: 16,
    transition: 'all .3s',

    '&:hover': {
      color: palette.primary,
      opacity: '0.7',
    },
  },

  '@media(max-width: 768px)': {
    alignItems: 'center',
  },
}));

const FindUsCircle = styled(Box)(() => ({
  width: 80,
  height: 80,
  backgroundColor: 'rgba(0, 0, 0, 0.04)',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',

  img: {
    width: 55,
    height: 55,
  },

  '@media(max-width: 768px)': {
    width: 70,
    height: 70,

    img: {
      width: '50px !important',
      height: '50px !important',
    },
  },
}));

export {
  FindUsContacts,
  FindUsCircle,
  FindUsInfoWrapper,
  FindUsContactsWrapper,
  FindUsChild,
};
export default FindUsRoot;
