import * as S from './ColorBoxStyle';
import checkIcon from '../../assets/icons/check.svg';

const colors = [
  { name: 'orange', value: 'var(--orange-200)' },
  { name: 'purple', value: 'var(--purple-200)' },
  { name: 'blue', value: 'var(--blue-200)' },
  { name: 'green', value: 'var(--green-200)' },
];

const ColorBox = () => {
  return (
    <S.BoxContainer>
      {colors.map((color) => (
        <S.ColorBox color={color.value} key={color.name} />
      ))}
    </S.BoxContainer>
  );
};

export default ColorBox;
