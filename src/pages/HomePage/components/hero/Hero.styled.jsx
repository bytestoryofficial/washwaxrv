import { Box, styled } from '@mui/material';
import palette from 'theme/palette';

const HeroRoot = styled(Box)(() => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: 850,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media(max-width: 1440px)': {
    height: 650,
  },

  '@media(max-width: 1024px)': {
    height: 550,
  },

  '@media(max-width: 768px)': {
    height: 450,
  },
}));

const Overlay = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1,
}));

const HeroInner = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
  zIndex: 2,

  '@media(max-width: 1024px)': {
    gap: 15,
  },

  '@media(max-width: 768px)': {
    gap: 10,
    paddingTop: 40,
  },
}));

const HeroTitle = styled('h1')(() => ({
  color: palette.primary,
  fontSize: 48,
  textAlign: 'center',
  maxWidth: 500,
  lineHeight: 1.1,
  margin: '0 auto',

  '@media(max-width: 1024px)': {
    fontSize: 36,
  },

  '@media(max-width: 768px)': {
    fontSize: 26,
  },
}));

const HeroSubtitle = styled('h3')(() => ({
  color: palette.primary,
  textAlign: 'center',
  fontWeight: 400,
  fontSize: 18,
  lineHeight: 1.2,

  '@media(max-width: 1024px)': {
    fontSize: 16,
  },

  '@media(max-width: 768px)': {
    fontSize: 15,
    marginBottom: 5,
  },
}));

export { Overlay, HeroSubtitle, HeroTitle, HeroInner };
export default HeroRoot;
