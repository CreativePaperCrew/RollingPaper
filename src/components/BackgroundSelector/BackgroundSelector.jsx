import * as S from './BackgroundSelectorStyle';
import checkIcon from '../../assets/icons/check.svg';
import COLORS from '../../constants/COLORS';

const BackgroundSelector = ({
  select,
  selectedColor,
  selectedImage,
  handleColorBoxClick,
  handleImageBoxClick,
  imageUrls,
}) => {
  return (
    <S.Container>
      {select === 'color'
        ? COLORS.map((color) => (
            <S.ColorBox
              color={color.value}
              key={color.name}
              onClick={() => handleColorBoxClick(color.name)}
            >
              {selectedColor === color.name && <S.CheckIcon src={checkIcon} />}
            </S.ColorBox>
          ))
        : imageUrls.map((imageUrl) => (
            <S.ImageBox
              $url={imageUrl}
              key={imageUrl}
              onClick={() => handleImageBoxClick(imageUrl)}
              className={selectedImage === imageUrl && 'selected'}
            >
              {selectedImage === imageUrl && <S.CheckIcon src={checkIcon} />}
            </S.ImageBox>
          ))}
    </S.Container>
  );
};

export default BackgroundSelector;
