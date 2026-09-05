import { Box, styled } from '@mui/material';
import palette from '../../../../theme/palette';

const ContactRoot = styled(Box)(() => ({
  padding: '60px 0',
}));

const ContactInner = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: 40,
  flexWrap: 'wrap',

  '@media(max-width: 768px)': {
    gap: 60,
  },
}));

const ButtonWrapper = styled(Box)(() => ({
  '@media(max-width: 768px)': {
    width: '100%',
    textAlign: 'center',
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

const ContactText = styled(Box)(() => ({
  width: 'calc(50% - 20px)',

  '@media(max-width: 768px)': {
    width: '100%',
  },
}));

const ContactTextTitle = styled('h2')(() => ({
  color: palette.text,
  fontSize: '32px',
  lineHeight: 1.3,

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

const ContactTextInfo = styled('p')(() => ({
  margin: 0,
  marginTop: 10,
  color: palette.text,
  fontSize: '18px',

  '@media(max-width: 768px)': {
    fontSize: 16,
  },
}));

const ContactForm = styled(Box)(() => ({
  width: 'calc(50% - 20px)',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,

  '@media(max-width: 768px)': {
    width: '100%',
  },
}));

export {
  ContactInner,
  ContactForm,
  ContactTextInfo,
  ContactTextTitle,
  ContactText,
  ButtonWrapper,
  SuccessWrapper,
};
export default ContactRoot;
