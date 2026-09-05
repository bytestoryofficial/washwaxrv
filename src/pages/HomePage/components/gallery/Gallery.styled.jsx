import { Box, styled } from '@mui/material';
import palette from 'theme/palette';

const GalleryRoot = styled(Box)(() => ({
  padding: '60px 0',
}));

const GalleryTitle = styled('h2')(() => ({
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

const GalleryInner = styled(Box)(() => ({
  margin: '0 auto',
  maxWidth: '90%',
  marginTop: 60,
  '@media (max-width: 1400px)': {
    width: '90%',
  },
}));

const SlideWrapper = styled('div')(() => ({
  padding: '0 10px',
  display: 'flex',
  width: '100%',
  height: '100%',
  gap: 20,
}));

const SlideItemWrapper = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
}));

const SlideHead = styled('h6')(() => ({
  textAlign: 'center',
  color: palette.text,
  fontSize: 24,
  height: 24,

  '@media(max-width: 1024px)': {
    fontSize: 20,
  },

  '@media(max-width: 768px)': {
    fontSize: 18,
  },

  '@media(max-width: 480px)': {
    fontSize: 16,
  },
}));

const SlideItem = styled('div')(() => ({
  width: '100%',
  height: 700,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  borderRadius: 5,

  '@media (max-width: 3200px)': {
    height: 600,
  },

  '@media (max-width: 1400px)': {
    width: '90%',
  },

  '@media (max-width: 1024px)': {
    height: 500,
  },

  '@media (max-width: 768px)': {
    height: 400,
  },

  '@media (max-width: 480px)': {
    height: 300,
  },
}));

export {
  GalleryTitle,
  SlideWrapper,
  SlideItemWrapper,
  SlideItem,
  GalleryInner,
  SlideHead,
};
export default GalleryRoot;
