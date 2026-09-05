import { useMediaQuery } from '@mui/material';

const useMediaBreakpoints = () => {
  const laptopMatches = useMediaQuery('(max-width: 1024px)');
  const tabletLGMatches = useMediaQuery('(max-width: 880px)');
  const tabletMatches = useMediaQuery('(max-width: 768px)');
  const mobileMatches = useMediaQuery('(max-width: 480px)');

  return {
    largeTabletBreakpoing: tabletLGMatches,
    laptopBreakpoint: laptopMatches,
    tabletBreakpoint: tabletMatches,
    mobileBreakpoint: mobileMatches,
  };
};

export default useMediaBreakpoints;
