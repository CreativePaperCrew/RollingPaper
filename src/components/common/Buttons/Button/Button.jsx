import * as S from './ButtonStyle';

const Button = ({ size, isDisabled, children }) => {
  return (
    <S.Button size={size} disabled={isDisabled}>
      {children}
    </S.Button>
  );
};

export default Button;
