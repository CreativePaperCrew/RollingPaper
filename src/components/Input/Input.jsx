import { useState } from 'react';
import * as S from './InputStyle';

const Input = ({ placeholder, saveRecipient, recipient }) => {
  const [isBlank, setIsBlank] = useState(false);

  const handleFocusout = () => {
    setIsBlank(!recipient);
  };

  return (
    <S.Container>
      <S.Input
        placeholder={placeholder}
        $isError={isBlank}
        onChange={(e) => saveRecipient(e)}
        onBlur={handleFocusout}
      />
      {isBlank && <S.ErrorMessage>내용을 입력해주세요</S.ErrorMessage>}
    </S.Container>
  );
};

export default Input;
