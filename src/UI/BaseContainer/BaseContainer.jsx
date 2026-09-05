import { Box, styled } from '@mui/material';

const ContainerRoot = styled(Box)(() => ({
  maxWidth: 1400,
  padding: '0 15px',
  margin: '0 auto',
  width: '100%',

  '@media(max-width: 1440px)': {
    maxWidth: 1200,
  },
}));

const BaseContainer = ({ children }) => {
  return <ContainerRoot>{children}</ContainerRoot>;
};

export default BaseContainer;
