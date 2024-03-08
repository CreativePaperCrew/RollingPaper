import { useEffect, useRef, useState } from 'react';

const useToggle = () => {
  const toggleRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (toggleRef.current && !toggleRef.current.contains(e.target)) {
        handleClose();
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return { isOpen, toggleRef, handleToggle, handleOpen, handleClose };
};

export default useToggle;
