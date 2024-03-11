import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/common/Header/Header';
import { VIEWPORT_SIZE } from './constants/viewportSize';
import { ToastProvider } from './contexts/ToastContext';

const AppLayout = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia(`(${VIEWPORT_SIZE.mobile})`);
    const handleChange = () => {
      setIsMobile(matchMedia.matches);
    };

    handleChange();
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, []);

  const shouldHideHeader = location.pathname.startsWith('/post') && isMobile;

  return (
    <ToastProvider>
      {!shouldHideHeader && <Header />}
      <Outlet />
    </ToastProvider>
  );
};

export default AppLayout;
