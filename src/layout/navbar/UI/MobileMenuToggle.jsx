import { styled } from '@mui/material';
import { motion } from 'framer-motion';
import palette from 'theme/palette';

const ToggleButton = styled('button')(() => ({
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  position: 'absolute',
  top: '55%',
  transform: 'translateY(-50%)',
  right: 15,
  width: 23,
  height: 40,
  padding: 0,
  background: 'transparent',
  zIndex: 30,
}));

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={palette.secondary}
    strokeLinecap="round"
    {...props}
  />
);

const MobileMenuToggle = ({ toggle, active }) => (
  <ToggleButton onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        stroke={active ? palette.secondary : palette.primary}
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        stroke={active ? palette.secondary : palette.primary}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        stroke={active ? palette.secondary : palette.primary}
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </ToggleButton>
);

export default MobileMenuToggle;
