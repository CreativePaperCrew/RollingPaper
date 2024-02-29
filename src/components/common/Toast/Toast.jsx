import React from 'react';
import * as S from './ToastStyle';

const Toast = ({
  isSuccess,
  message,
  isShow,
  isShouldRender,
  startHidingToast,
}) => {
  return (
    isShouldRender && (
      <S.ToastContainer $isShow={isShow}>
        {isSuccess ? <S.CompletedIcon /> : <S.FailedIcon />}
        <S.Message>{message}</S.Message>
        <S.CloseIcon onClick={startHidingToast} />
      </S.ToastContainer>
    )
  );
};

export default Toast;
