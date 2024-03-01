import { useState, useEffect } from 'react';

const useToast = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const showToast = (status, message) => {
    if (isLoading) return;
    setIsLoading(true);
    setShouldRender(true);
    setIsShown(true);
    setIsSuccess(status);
    setMessage(message);

    setTimeout(() => {
      startHidingToast();
    }, 3000);
  };

  const startHidingToast = () => {
    setIsShown(false);
    setTimeout(() => {
      setShouldRender(false);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (!isShown && !isLoading) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isShown, isLoading]);

  return {
    shouldRender,
    isShown,
    isSuccess,
    showToast,
    startHidingToast,
    message,
  };
};

export default useToast;
