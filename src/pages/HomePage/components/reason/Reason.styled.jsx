import { Box, styled } from '@mui/material';
import palette from 'theme/palette';

const ReasonRoot = styled(Box)(() => ({
  padding: '60px 0',
}));

const ReasonTitle = styled('h2')(() => ({
  textAlign: 'center',
  color: palette.text,
  fontSize: '32px',

  '@media(max-width: 1024px)': {
    fontSize: 28,
  },

  '@media(max-width: 768px)': {
    fontSize: 24,
  },

  '@media(max-width: 480px)': {
    fontSize: 20,
  },
}));

const ReasonItems = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 60,
  gap: 30,

  '@media(max-width: 1024px)': {
    gap: 20,
  },
}));

const ReasonItem = styled(Box)(() => ({
  width: 'calc(33.3% - 40px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,

  '@media(max-width: 1024px)': {
    gap: 10,
    width: 'calc(33.3% - 20px)',
  },

  '@media(max-width: 768px)': {
    width: 'calc(50% - 20px)',
  },

  '@media(max-width: 480px)': {
    width: '100%',
  },
}));

const ReasonCircle = styled(Box)(() => ({
  width: 90,
  height: 90,
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
      width: 40,
      height: 40,
    },
  },
}));

const ReasonItemTitle = styled('h6')(() => ({
  fontSize: 18,
  color: palette.text,
  fontWeight: 600,
  textAlign: 'center',

  '@media(max-width: 1024px)': {
    fontSize: 17,
  },

  '@media(max-width: 768px)': {
    fontSize: 16,
  },
}));

const ReasonItemSubtitle = styled('p')(() => ({
  fontSize: 14,
  color: palette.text,
  textAlign: 'center',
  fontWeight: 400,
  opacity: 0.8,
  margin: 0,
  maxWidth: 300,
  minHeight: 40,
}));

export {
  ReasonTitle,
  ReasonCircle,
  ReasonItemTitle,
  ReasonItemSubtitle,
  ReasonItem,
  ReasonItems,
};
export default ReasonRoot;
