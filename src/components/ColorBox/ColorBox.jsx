import * as S from './ColorBoxStyle';
import checkIcon from '../../assets/icons/check.svg';
import { useState } from 'react';

const colors = [
  { name: 'orange', value: 'var(--orange-200)' },
  { name: 'purple', value: 'var(--purple-200)' },
  { name: 'blue', value: 'var(--blue-200)' },
  { name: 'green', value: 'var(--green-200)' },
];

const ColorBox = ({ isColorSelected }) => {
  const [selectedColor, setSelectedColor] = useState();

  const handleBoxClick = (color) => {
    setSelectedColor(color);
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
    </S.BoxContainer>
  );
};

export default ColorBox;
