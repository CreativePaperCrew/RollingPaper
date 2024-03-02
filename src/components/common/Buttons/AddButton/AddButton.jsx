import React from 'react';
import * as S from './AddButtonStyle';
import plusIcon from '../../../../assets/icons/plus.svg';

const AddButton = () => {
  return (
    <S.AddButtonContainer>
      <img src={plusIcon} alt="카드를 만드는 버튼" />
    </S.AddButtonContainer>
  );
};

export default AddButton;
