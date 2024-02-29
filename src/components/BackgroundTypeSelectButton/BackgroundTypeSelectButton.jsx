import * as S from './BackgroundTypeSelectButtonStyle';

const BackgroundTypeSelectButton = ({
  handleColorButtonClick,
  handleImageButtonClick,
  select,
}) => {
  return (
    <S.Container>
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
    </S.Container>
  );
};

export default BackgroundTypeSelectButton;
