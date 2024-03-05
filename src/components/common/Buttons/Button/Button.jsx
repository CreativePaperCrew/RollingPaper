import * as S from './ButtonStyle';

const Button = ({ size, isDisabled, children, handleButtonClick }) => {
  return (
    <S.Button size={size} disabled={isDisabled} onClick={handleButtonClick}>
      {children}
    </S.Button>
  );
};

export default Button;
