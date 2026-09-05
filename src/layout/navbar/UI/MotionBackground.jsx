import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import palette from 'theme/palette';

const MotionBackground = styled(motion.div)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: '100vh',
  width: '100%',
  backgroundColor: palette.primary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 20,
}));

const MotionMenuList = styled(motion.ul)(() => ({
  listStyle: 'none',
  padding: 0,
}));

const MotionMenuItem = styled(motion.li)(() => ({
  margin: '20px 0',
  overflowY: 'hidden',
  userSelect: 'none',
  cursor: 'pointer',

  div: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 500,
  },
}));

const MotionMenuActions = styled(motion.div)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 30,
  gap: 15,
}));

export { MotionMenuList, MotionMenuItem, MotionMenuActions };
export default MotionBackground;
