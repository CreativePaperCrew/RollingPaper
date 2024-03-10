import * as S from './ArrowButtonStyle';

export const ArrowButton = ({ image, onClick }) => {
  return (
    <S.ArrowContainer onClick={onClick}>
      <S.ArrowImg src={image} alt="화살표 이미지" />
    </S.ArrowContainer>
  );
};
