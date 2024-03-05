import { useState } from 'react';
import * as S from './InputStyle';

const Input = ({ placeholder, saveValue, value }) => {
  const [isBlank, setIsBlank] = useState(false);

  const handleFocusout = () => {
    setIsBlank(!value);
  };

  return (
    <S.Container>
      <S.Input
        placeholder={placeholder}
        $isError={isBlank}
        onChange={(e) => {
          saveValue(e);
          setIsBlank(false);
        }}
        onBlur={handleFocusout}
      />
      {isBlank && <S.ErrorMessage>내용을 입력해주세요</S.ErrorMessage>}
    </S.Container>
  );
};

export default Input;
