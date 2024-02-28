import * as S from './InputStyle';

const Input = ({ children }) => {
  return (
    <S.Container>
      <S.Input placeholder={children} />
      <S.ErrorMessage>내용을 입력해주세요.</S.ErrorMessage>
    </S.Container>
  );
};

export default Input;
