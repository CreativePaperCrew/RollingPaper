import * as S from './LinkButtonStyle';

const LinkButton = ({ text, to, width, isDisabled }) => {
  return (
    <S.ButtonContainer>
      <S.CustomButtonLink to={to}>
        <S.CustomButton width={width} disabled={isDisabled}>
          {text}
        </S.CustomButton>
      </S.CustomButtonLink>
    </S.ButtonContainer>
  );
};

export default LinkButton;
