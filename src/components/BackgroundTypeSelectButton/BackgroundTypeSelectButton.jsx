import * as S from './BackgroundTypeSelectButtonStyle';

const BackgroundTypeSelectButton = ({
  handleColorButtonClick,
  handleImageButtonClick,
  select,
}) => {
  return (
    <S.ButtonContainer>
      <S.Button
        onClick={handleColorButtonClick}
        className={select === 'color' && 'clicked'}
      >
        컬러
      </S.Button>
      <S.Button
        onClick={handleImageButtonClick}
        className={select === 'image' && 'clicked'}
      >
        이미지
      </S.Button>
    </S.ButtonContainer>
  );
};

export default BackgroundTypeSelectButton;
