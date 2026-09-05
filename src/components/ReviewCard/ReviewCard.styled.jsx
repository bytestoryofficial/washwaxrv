/* eslint-disable no-unused-vars */
import { Box, styled } from '@mui/material';
import React from 'react';
// import palette from 'theme/palette';

const ReviewCardRoot = styled(Box)(() => ({
  backgroundColor: '#F5F5F5',
  border: '1px solid #D9D9D9',
  borderRadius: 8,
  padding: 24,
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(50% - 20px)',
  gap: 24,

  '@media(max-width: 1024px)': {
    width: 'calc(50% - 20px)',
    gap: 20,
  },

  '@media(max-width: 768px)': {
    width: '100%',
    gap: 14,
  },
}));

const ReviewWidget = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}));

const ReviewWidgetUser = styled('p')(() => ({
  margin: 0,
  fontSize: 16,
  lineHeight: 1.2,
  // color: palette.text,
  color: '#1b1b1b',
  fontWeight: 500,
  opacity: 0.7,

  '@media(max-width: 768px)': {
    fontSize: 14,
  },
}));

const ReviewWidgetRate = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 3,

  svg: {
    // color: palette.text,
    color: '#1b1b1b',
  },

  '@media(max-width: 768px)': {
    svg: {
      width: 20,
      height: 20,
    },
  },
}));

const ReviewContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
}));

const ReviewContentTitle = styled('h4')(() => ({
  // color: palette.text,
  color: '#1b1b1b',
  fontSize: 24,
  fontWeight: 600,
  lineHeight: 1.3,

  '@media(max-width: 1024px)': {
    fontSize: 20,
  },

  '@media(max-width: 768px)': {
    fontSize: 18,
  },
}));

const ReviewContentDesc = styled('p')(() => ({
  margin: 0,
  // color: palette.text,
  color: '#1b1b1b',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.2,

  '@media(max-width: 1024px)': {
    fontSize: 14,
  },
}));

const ReviewDate = styled('p')(() => ({
  textAlign: 'right',
  margin: 0,
  fontSize: 14,
  lineHeight: 1.2,
  // color: palette.text,
  color: '#1b1b1b',
  fontWeight: 500,
  opacity: 0.7,
}));

export {
  ReviewWidget,
  ReviewContent,
  ReviewContentTitle,
  ReviewWidgetRate,
  ReviewWidgetUser,
  ReviewContentDesc,
  ReviewDate,
};
export default ReviewCardRoot;
