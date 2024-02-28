import * as S from './ArrowButtonStyle';
import leftArrowImg from '../../../assets/images/leftArrow.svg';
import rightArrowImg from '../../../assets/images/rightArrow.svg';

export const LeftArrowButton = () => {
  return (
    <S.ArrowContainer>
      <S.ArrowImg src={leftArrowImg} alt="왼쪽 화살표 이미지" />
    </S.ArrowContainer>
  );
};

export const RigthArrowButton = () => {
  return (
    <S.ArrowContainer>
      <S.ArrowImg src={rightArrowImg} alt="오른쪽 화살표 이미지" />
    </S.ArrowContainer>
  );
};
