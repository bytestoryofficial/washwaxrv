import { Box, styled } from '@mui/material';
import palette from 'theme/palette';

const ServiceRoot = styled(Box)(() => ({ padding: '60px 0' }));

const ServiceTitle = styled('h2')(() => ({
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

const ServiceInner = styled(Box)(() => ({
  marginTop: 60,
}));

const ServiceContainer = styled(Box)(() => ({
  margin: '0 auto',
}));

const ServiceItemTitle = styled('h4')(() => ({
  fontSize: 20,
  fontWeight: 700,
  marginBottom: 30,
  color: palette.text,

  '@media(max-width: 768px)': {
    fontSize: 18,
  },

  '@media(max-width: 480px)': {
    fontSize: 16,
  },
}));

const ServiceItem = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '14px 10px',
  gap: 20,

  '@media (max-width: 1024px)': {
    padding: '14px 10px',
  },

  '@media (max-width: 768px)': {
    padding: '14px 10px',
  },
}));

const ServiceItemText = styled('p')(() => ({
  margin: 0,
  fontSize: 16,
  fontWeight: 500,
  lineHeight: 1.2,
  color: palette.text,

  '@media (max-width: 768px)': {
    fontSize: 14,
  },
}));

export {
  ServiceTitle,
  ServiceItem,
  ServiceItemTitle,
  ServiceContainer,
  ServiceItemText,
  ServiceInner,
};
export default ServiceRoot;
