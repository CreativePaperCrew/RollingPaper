import React from 'react';
import * as S from './ToastStyle';

const Toast = ({
  shouldRender,
  isShown,
  isSuccess,
  message,
  startHidingToast,
}) => {
  return (
    shouldRender && (
      <S.ToastContainer $isShown={isShown}>
        {isSuccess ? <S.CompletedIcon /> : <S.FailedIcon />}
        <S.Message>{message}</S.Message>
        <S.CloseIcon onClick={startHidingToast} />
      </S.ToastContainer>
    )
  );
};

export default Toast;
