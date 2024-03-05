import * as S from './InputStyle';

const Input = ({ placeholder, saveRecipient, recipient }) => {
  return (
    <S.Container>
      <S.Input
        placeholder={placeholder}
        $isError={!recipient}
        onChange={(e) => saveRecipient(e)}
      />
      {!recipient && <S.ErrorMessage>내용을 입력해주세요</S.ErrorMessage>}
    </S.Container>
  );
};

export default Input;
