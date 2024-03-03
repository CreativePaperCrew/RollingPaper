import * as S from './ArrowButtonStyle';
import leftArrowImg from '../../../assets/images/leftArrow.svg';
import rightArrowImg from '../../../assets/images/rightArrow.svg';

export const LeftArrowButton = ({ onClick }) => {
  return (
    <S.ArrowContainer onClick={onClick}>
      <S.ArrowImg src={leftArrowImg} alt="왼쪽 화살표 이미지" />
    </S.ArrowContainer>
  );
};

export const RightArrowButton = ({ onClick }) => {
  return (
    <S.ArrowContainer onClick={onClick}>
      <S.ArrowImg src={rightArrowImg} alt="오른쪽 화살표 이미지" />
    </S.ArrowContainer>
  );
};
