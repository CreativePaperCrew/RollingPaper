import * as S from './InputStyle';

const Input = ({ children, width, saveRecipient, recipient }) => {
  return (
    <S.Container className={width}>
      <S.Input
        placeholder={children}
        onChange={(e) => saveRecipient(e)}
        className={!recipient && 'errorMessage'}
      />
      <S.ErrorMessage className={!recipient && 'errorMessage'}>
        내용을 입력해주세요.
      </S.ErrorMessage>
    </S.Container>
  );
};

export default Input;
