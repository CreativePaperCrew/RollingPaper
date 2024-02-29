import * as S from './ToggleButtonStyle';

const ToggleButton = ({ handleColorClick, handleImageClick, select }) => {
  return (
    <S.ButtonContainer>
      {console.log(select)}
      <S.Button
        onClick={handleColorClick}
        className={select === 'color' && 'clicked'}
      >
        컬러
      </S.Button>
      <S.Button
        onClick={handleImageClick}
        className={select === 'image' && 'clicked'}
      >
        이미지
      </S.Button>
    </S.ButtonContainer>
  );
};

export default ToggleButton;
