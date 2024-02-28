import { useEffect, useState } from 'react';
import apiClient from '../../apis/apiConfig';
import * as S from './BackgroundSelectorStyle';
import checkIcon from '../../assets/icons/check.svg';

const colors = [
  { name: 'orange', value: 'var(--orange-200)' },
  { name: 'purple', value: 'var(--purple-200)' },
  { name: 'blue', value: 'var(--blue-200)' },
  { name: 'green', value: 'var(--green-200)' },
];

const BackgroundSelector = ({ isColorSelected, isImageSelected }) => {
  const [selectedColor, setSelectedColor] = useState();
  const [seletedImage, setSelectedImage] = useState();
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    apiClient.get('/background-images/').then((res) => {
      setImageUrls(res.data.imageUrls);
    });
  }, []);

  const handleBoxClick = (color) => {
    setSelectedColor(color);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <S.BoxContainer>
      {isColorSelected &&
        colors.map((color) => (
          <S.ColorBox
            color={color.value}
            key={color.name}
            onClick={() => handleBoxClick(color.name)}
          >
            {selectedColor === color.name && <S.CheckIcon src={checkIcon} />}
          </S.ColorBox>
        ))}
      {isImageSelected &&
        imageUrls.map((imageUrl) => (
          <S.ImageBox url={imageUrl} onClick={() => handleImageClick(imageUrl)}>
            {seletedImage === imageUrl && <S.CheckIcon src={checkIcon} />}
          </S.ImageBox>
        ))}
    </S.BoxContainer>
  );
};

export default BackgroundSelector;
