import { useEffect, useState } from 'react';
import * as S from './ToggleButtonStyle';

const ToggleButton = () => {
  const [isColorSelected, setIsColorSelected] = useState(false);
  const [isImageSelected, setIsImageSelected] = useState(false);

  const handleColorClick = () => {
    setIsColorSelected(!isColorSelected);
    setIsImageSelected(false);
  };

  const handleImageClick = () => {
    setIsColorSelected(false);
    setIsImageSelected(!isImageSelected);
  };

  return (
    <S.ButtonContainer>
      {console.log(`color : ${isColorSelected}`)}
      {console.log(`image : ${isImageSelected}`)}
      <S.Button
        onClick={handleColorClick}
        className={isColorSelected && 'clicked'}
      >
        컬러
      </S.Button>
      <S.Button
        onClick={handleImageClick}
        className={isImageSelected && 'clicked'}
      >
        이미지
      </S.Button>
    </S.ButtonContainer>
  );
};

export default ToggleButton;
