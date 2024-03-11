import React, { createContext, useContext } from 'react';
import Toast from '../components/common/Toast/Toast';
import useToast from '../hooks/useToast';

const ToastContext = createContext();

export const useToastContext = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const toastProps = useToast();

  return (
    <ToastContext.Provider value={toastProps}>
      {children}
      <Toast
        shouldRender={toastProps.shouldRender}
        isShown={toastProps.isShown}
        isSuccess={toastProps.isSuccess}
        message={toastProps.message}
        startHidingToast={toastProps.startHidingToast}
      />
    </ToastContext.Provider>
  );
};
