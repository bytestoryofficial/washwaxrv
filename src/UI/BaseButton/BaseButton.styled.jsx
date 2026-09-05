import { LoadingButton } from '@mui/lab';
import { Button, styled } from '@mui/material';
import palette from '../../theme/palette';

const BaseButtonStyled = styled(Button)(({ animate }) => ({
  position: 'relative',
  fontFamily: 'Montserrat',
  color: animate ? palette.secondary : palette.primary,
  backgroundColor: animate ? palette.primary : 'transparent',
  padding: animate ? '0px 20px' : '0',
  fontSize: 14,
  fontWeight: 600,
  height: 45,
  borderRadius: 5,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'none',
  transition: 'all 0.6s',
  transitionTimingFunction: 'ease',
  width: '100%',

  '@media (max-width: 768px)': {
    height: 34,
    fontSize: 13,
  },

  span: {
    lineHeight: 1,
  },

  svg: {
    height: 43,
    left: 0,
    position: 'absolute',
    width: '100%',
    borderRadius: 5,

    '@media (max-width: 768px)': {
      height: 34,
    },
  },

  rect: {
    fill: 'none',
    stroke: palette.primary,
    strokeWidth: 3,
    strokeDasharray: '422, 0',
    transition: 'all 0.35s linear',
  },

  '&:hover': {
    backgroundColor: 'transparent',
    color: palette.primary,

    rect: {
      strokeWidth: 5,
      strokeDasharray: '15, 200',
      strokeDashoffset: 48,
      transition: 'all 1.35s cubic-bezier(0.19, 1, 0.22, 1)',
    },
  },
}));

const BaseSMButtonStyled = styled(Button)(({ animate, dark }) => ({
  position: 'relative',
  fontFamily: 'Montserrat',
  color: animate ? palette.secondary : palette.primary,
  backgroundColor: animate ? palette.primary : 'transparent',
  padding: animate ? '0px 14px' : '0',
  fontSize: 14,
  fontWeight: 600,
  height: 36,
  borderRadius: 5,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'none',
  transition: 'all 0.6s',
  transitionTimingFunction: 'ease',
  width: '100%',

  '@media (max-width: 768px)': {
    height: 36,
    fontSize: 13,
  },

  span: {
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },

  '& .svg-rect': {
    height: 36,
    left: 0,
    position: 'absolute',
    width: '100%',
    borderRadius: 5,

    '@media (max-width: 768px)': {
      height: 34,
    },
  },

  rect: {
    fill: 'none',
    stroke: dark ? palette.secondary : palette.primary,
    strokeWidth: 3,
    strokeDasharray: '422, 0',
    transition: 'all 0.35s linear',
  },

  '&:hover': {
    backgroundColor: 'transparent',
    color: dark ? palette.secondary : palette.primary,

    rect: {
      strokeWidth: 5,
      strokeDasharray: '15, 200',
      strokeDashoffset: 48,
      transition: 'all 1.35s cubic-bezier(0.19, 1, 0.22, 1)',
    },
  },
}));

const BaseButtonStyledScrolling = styled(Button)(({ animate }) => ({
  position: 'relative',
  fontFamily: 'Montserrat',
  color: animate ? palette.primary : palette.secondary,
  backgroundColor: animate ? palette.secondary : 'transparent',
  padding: animate ? '0px 20px' : '0',
  fontSize: 14,
  fontWeight: 600,
  height: 45,
  borderRadius: 5,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'none',
  transition: 'all 0.6s',
  transitionTimingFunction: 'ease',
  width: '100%',

  '@media (max-width: 768px)': {
    height: 34,
    fontSize: 13,
  },

  span: {
    lineHeight: 1,
  },

  svg: {
    height: 43,
    left: 0,
    position: 'absolute',
    width: '100%',
    borderRadius: 5,

    '@media (max-width: 768px)': {
      height: 34,
    },
  },

  rect: {
    fill: 'none',
    stroke: palette.secondary,
    strokeWidth: 3,
    strokeDasharray: '422, 0',
    transition: 'all 0.35s linear',
  },

  '&:hover': {
    backgroundColor: 'transparent',
    color: palette.secondary,

    rect: {
      strokeWidth: 5,
      strokeDasharray: '15, 200',
      strokeDashoffset: 48,
      transition: 'all 1.35s cubic-bezier(0.19, 1, 0.22, 1)',
    },
  },
}));

const LoadingButtonStyled = styled(LoadingButton)(({ animate }) => ({
  position: 'relative',
  fontFamily: 'Montserrat',
  color: palette.secondary,
  backgroundColor: 'transparent',
  padding: animate ? '0px 20px' : '0',
  fontSize: 14,
  fontWeight: 600,
  height: 40,
  borderRadius: 5,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'none',
  transition: 'all 0.6s',
  transitionTimingFunction: 'ease',
  width: '100%',

  '@media (max-width: 768px)': {
    height: 34,
    fontSize: 13,
  },

  span: {
    color: palette.secondary,
  },
}));

export { BaseButtonStyledScrolling, BaseSMButtonStyled, LoadingButtonStyled };
export default BaseButtonStyled;
