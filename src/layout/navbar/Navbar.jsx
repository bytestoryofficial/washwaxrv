/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import { motion, useCycle } from 'framer-motion';

import NavbarRoot, {
  MenuItem,
  MenusInner,
  NavbarInner,
  TempLogo,
} from './Navbar.styled';
import { BaseContainer, BaseSMButton } from 'UI';

import menuList from 'layout/menuList';
import MotionBackground, {
  MotionMenuItem,
  MotionMenuList,
} from './UI/MotionBackground';
import MobileMenuToggle from './UI/MobileMenuToggle';

import useMediaBreakpoints from 'hooks/useMediaBreakpoints';

import logoImage from 'assets/logo.png';
import { HashLink } from 'react-router-hash-link';
import { Box } from '@mui/material';

const topbar = {
  open: {
    y: '0%',
    transition: {
      delay: 0.15,
      duration: 1.1,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
  closed: {
    y: '-100%',
    transition: {
      delay: 0.35,
      duration: 0.63,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
};

const ulVariant = {
  open: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.18,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const liVariant = {
  open: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
  closed: {
    opacity: 0,
    y: '100%',
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
    },
  },
};

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const { largeTabletBreakpoing } = useMediaBreakpoints();

  const [isOpen, toggleOpen] = useCycle(false, true);

  const activeState = useMemo(() => {
    if (isOpen) return 1;
    else return 0;
  }, [isOpen]);

  const handleToggle = () => {
    if (!isOpen) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'auto';
    toggleOpen();
  };

  const handleHome = () => {
    window.scrollTo(0, 0);
  };

  const handleCall = () => {
    window.open('tel:(305)9399915');
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setScrolling(true) : setScrolling(false);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrolling]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderMobileMenu = (
    <MenusInner>
      <motion.nav initial="closed" animate={isOpen ? 'open' : 'closed'}>
        <MotionBackground variants={topbar}>
          <MotionMenuList variants={ulVariant}>
            {menuList.map((menu) => (
              <MotionMenuItem whileTap={{ scale: 0.95 }} key={menu.id}>
                <motion.div variants={liVariant}>
                  <HashLink
                    style={{ color: 'unset' }}
                    to={menu.href}
                    onClick={handleToggle}
                    smooth
                  >
                    {menu.label}
                  </HashLink>
                </motion.div>
              </MotionMenuItem>
            ))}
          </MotionMenuList>
        </MotionBackground>
        {largeTabletBreakpoing && (
          <Box marginRight="50px" position="relative" zIndex="1">
            <a href="tel:(305)9399915">
              <BaseSMButton
                label=""
                animate
                maxWidth="50px"
                minWidth="50px"
                icon={<CallIcon sx={{ fontSize: '20px' }} />}
              />
            </a>
          </Box>
        )}
        <MobileMenuToggle
          active={activeState}
          toggle={handleToggle}
          scrolling={scrolling}
        />
      </motion.nav>
    </MenusInner>
  );

  const renderDesktopMenu = (
    <MenusInner>
      {menuList.map((menu) => (
        <MenuItem
          smooth
          to={menu.href}
          key={menu.id}
          active={scrolling ? 1 : 0}
        >
          {menu.label}
        </MenuItem>
      ))}
      <BaseSMButton
        onClick={handleCall}
        label="Call Us Now"
        animate
        icon={<CallIcon sx={{ fontSize: '20px' }} />}
      />
    </MenusInner>
  );

  return (
    <NavbarRoot active={scrolling ? 1 : 0}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        }}
      >
        <BaseContainer>
          <NavbarInner>
            <TempLogo onClick={handleHome} active={scrolling ? 1 : 0}>
              <img src={logoImage} alt="logo" width={60} height={60} />
              <div>Wash Wax RV</div>
            </TempLogo>

            {largeTabletBreakpoing && renderMobileMenu}
            {!largeTabletBreakpoing && renderDesktopMenu}
          </NavbarInner>
        </BaseContainer>
      </motion.div>
    </NavbarRoot>
  );
};

export default Navbar;
