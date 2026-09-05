import { Box, styled } from '@mui/material';
import palette from 'theme/palette';

const FooterRoot = styled('footer')(() => ({
  padding: '40px 0 40px',
  backgroundColor: palette.secondary,
}));

const FooterInner = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const FooterCopyright = styled('p')(() => ({
  margin: 0,
  fontSize: 15,
  color: palette.primary,
  lineHeight: 1.2,
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
  gap: 10,

  '@media(max-width: 480px)': {
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 13,
  },
}));

export { FooterInner, FooterCopyright };
export default FooterRoot;
