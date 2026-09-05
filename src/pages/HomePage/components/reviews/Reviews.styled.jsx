import { Box, styled } from '@mui/material';
import palette from 'theme/palette';

const ReviewsRoot = styled(Box)(() => ({ padding: '60px 0' }));

const ReviewsTitle = styled('h2')(() => ({
  textAlign: 'center',
  color: palette.text,
  fontSize: '32px',
  lineHeight: 1.2,

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

const ReviewsWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginTop: 60,
  gap: 40,

  '@media(max-width: 1024px)': {
    gap: 20,
  },
}));

const SuccessWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#54983d',
  fontSize: 16,
  lineHeight: 1.3,
  fontWeight: 500,
  marginBottom: 10,
}));

const ReviewsButton = styled(Box)(() => ({
  textAlign: 'center',
  marginTop: 60,
}));

const ReviewModuleWrapper = styled(Box)(() => ({
  marginTop: 60,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'center',
}));

const ReviewButtons = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: 40,
  marginTop: 20,

  '@media (max-width: 768px)': {
    justifyContent: 'center',
  },

  '@media (max-width: 480px)': {
    flexDirection: 'column',
    gap: 10,
  },
}));

const ReviewRate = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 3,

  svg: {
    color: palette.text,
    width: 30,
    height: 30,
    cursor: 'pointer',
  },
}));

export {
  ReviewRate,
  ReviewsTitle,
  ReviewButtons,
  ReviewModuleWrapper,
  ReviewsButton,
  ReviewsWrapper,
  SuccessWrapper,
};
export default ReviewsRoot;
