import { styled } from '@mui/material';

const RootVersion = styled('div')(() => ({
  backgroundColor: '#000',
  color: 'rgba(255, 255, 255, 0.5)',
  fontSize: '10px',
  padding: '5px',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  zIndex: 1000,
}));

const Version = () => {
  return <RootVersion>Development v0.1.0</RootVersion>;
};

export default Version;
