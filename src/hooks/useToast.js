import { useState, useEffect } from 'react';

const useToast = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShouldRender, setIsShouldRender] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

  const showToast = (status, message) => {
    if (isLoading) return;
    setIsLoading(true);
    setIsShouldRender(true);
    setIsShow(true);
    setIsSuccess(status);
    setMessage(message);

    setTimeout(() => {
      startHidingToast();
    }, 3000);
  };

  const startHidingToast = () => {
    setIsShow(false);
    setTimeout(() => {
      setIsShouldRender(false);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (!isShow && !isLoading) {
      const timer = setTimeout(() => {
        setIsShouldRender(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isShow, isLoading]);

  return {
    isShow,
    isShouldRender,
    showToast,
    startHidingToast,
    isSuccess,
    message,
  };
};

export default useToast;
