import { useEffect, useState } from 'react';
import apiClient from '../../apis/apiConfig';
import * as S from './BackgroundSelectorStyle';
import checkIcon from '../../assets/icons/check.svg';

const colors = [
  { name: 'beige', value: '--orange-200' },
  { name: 'purple', value: '--purple-200' },
  { name: 'blue', value: '--blue-200' },
  { name: 'green', value: '--green-200' },
];

const BackgroundSelector = ({ select }) => {
  const [selectedColor, setSelectedColor] = useState('beige');
  const [selectedImage, setSeletedImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    apiClient.get('/background-images/').then((res) => {
      setImageUrls(res.data.imageUrls);
      setSeletedImage(res.data.imageUrls[0]);
    });
  }, []);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleImageClick = (image) => {
    setSeletedImage(image);
  };

  return (
    <S.BoxContainer>
      {select === 'color'
        ? colors.map((color) => (
            <S.ColorBox
              color={color.value}
              key={color.name}
              onClick={() => handleColorClick(color.name)}
            >
              {selectedColor === color.name && <S.CheckIcon src={checkIcon} />}
            </S.ColorBox>
          ))
        : imageUrls.map((imageUrl) => (
            <S.ImageBox
              $url={imageUrl}
              key={imageUrl}
              onClick={() => handleImageClick(imageUrl)}
            >
              {selectedImage === imageUrl && <S.CheckIcon src={checkIcon} />}
            </S.ImageBox>
          ))}
    </S.BoxContainer>
  );
};

export default BackgroundSelector;
