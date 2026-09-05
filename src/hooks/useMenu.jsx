/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { hasProperty } from 'helpers/checker';

const useMenu = (currentActiveItem) => {
  const [active, setActive] = useState(currentActiveItem);
  const [activeSubMenu, setActiveSubMenu] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const parentMenuActive = (item) => {
    if (hasProperty(item, 'children')) {
      const childs = item.children;
      const filtered = childs.filter((item) => item.route === pathname);

      if (filtered.length > 0) {
        return true;
      }
    }

    return false;
  };

  const handleMenuClick = (item) => () => {
    if (hasProperty(item, 'children')) {
      setActiveSubMenu((prevState) => !prevState);
    } else {
      setActive(item);
      navigate(item.route);
    }

    if (item?.child) {
      setActiveSubMenu(true);
    }
  };

  const handleFuncMenuClick = (item, func) => () => {
    handleMenuClick(item);
    func();
  };

  const menuActive = (item) => {
    return item.route === pathname;
  };

  return {
    activeSubMenu,
    onMenuChange: handleMenuClick,
    onBindFuncClick: handleFuncMenuClick,
    menuActive,
    parentMenuActive,
    setActiveSubMenu,
  };
};

export default useMenu;
