import * as S from './LinkButtonStyle';

const LinkButton = ({ text, to, width }) => {
  return (
    <S.ButtonContainer>
      <S.CustomButtonLink to={to}>
        <S.CustomButton width={width}>{text}</S.CustomButton>
      </S.CustomButtonLink>
    </S.ButtonContainer>
  );
};

export default LinkButton;
