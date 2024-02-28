import { useEffect, useState } from 'react';
import apiClient from '../../apis/apiConfig';
import * as S from './BackgroundSelectorStyle';
import checkIcon from '../../assets/icons/check.svg';

const colors = [
  { name: 'orange', value: '--orange-200' },
  { name: 'purple', value: '--purple-200' },
  { name: 'blue', value: '--blue-200' },
  { name: 'green', value: '--green-200' },
];

const BackgroundSelector = ({ isColorSelected, isImageSelected }) => {
  const [selectedBackground, setSelectedBackground] = useState();
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    apiClient.get('/background-images/').then((res) => {
      setImageUrls(res.data.imageUrls);
    });
  }, []);

  const handleClick = (background) => {
    setSelectedBackground(background);
  };

  return (
    <S.BoxContainer>
      {isColorSelected &&
        colors.map((color) => (
          <S.ColorBox
            color={color.value}
            key={color.name}
            onClick={() => handleClick(color.name)}
          >
            {selectedBackground === color.name && (
              <S.CheckIcon src={checkIcon} />
            )}
          </S.ColorBox>
        ))}
      {isImageSelected &&
        imageUrls.map((imageUrl) => (
          <S.ImageBox url={imageUrl} onClick={() => handleClick(imageUrl)}>
            {selectedBackground === imageUrl && <S.CheckIcon src={checkIcon} />}
          </S.ImageBox>
        ))}
    </S.BoxContainer>
  );
};

export default BackgroundSelector;
