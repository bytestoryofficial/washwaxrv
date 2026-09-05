import { HashLink } from 'react-router-hash-link';
import { styled } from '@mui/material';
import palette from 'theme/palette';

const NavbarRoot = styled('header')(({ active }) => ({
  padding: '5px 0',
  position: 'fixed',
  top: 0,
  zIndex: 100,
  width: '100%',
  backgroundColor: active ? palette.secondary : 'transparent',
  boxShadow: active ? palette.boxShadow : 'unset',
  transitionDuration: '400ms',
  transition: 'all 200ms cubic-bezier(0.33, 1, 0.68, 1)',
}));

const NavbarInner = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const TempLogo = styled('div')(({ active }) => ({
  fontSize: 19,
  fontWeight: 600,
  lineHeight: 1.2,
  color: active ? palette.primary : palette.primary,
  cursor: 'pointer',
  transition: 'all 300ms cubic-bezier(0.33, 1, 0.68, 1)',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
}));

const MenusInner = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 30,
}));

const MenuItem = styled(HashLink)(() => ({
  color: palette.primary,
  fontSize: 15,
  fontWeight: 500,
  lineHeight: 1.2,
  whiteSpace: 'nowrap',
  transition: 'all 300ms cubic-bezier(0.33, 1, 0.68, 1)',

  '&:hover': {
    color: palette.primary,
    opacity: 0.8,
  },
}));

export { NavbarInner, MenuItem, MenusInner, TempLogo };
export default NavbarRoot;
