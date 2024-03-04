import * as S from './ArrowButtonStyle';
import arrowLeftImg from '../../../../assets/icons/arrowLeft.svg';
import arrowRightImg from '../../../../assets/icons/arrowRight.svg';

export const LeftArrowButton = ({ onClick }) => {
  return (
    <S.ArrowContainer onClick={onClick}>
      <S.ArrowImg src={arrowLeftImg} alt="왼쪽 화살표 이미지" />
    </S.ArrowContainer>
  );
};

export const RightArrowButton = ({ onClick }) => {
  return (
    <S.ArrowContainer onClick={onClick}>
      <S.ArrowImg src={arrowRightImg} alt="오른쪽 화살표 이미지" />
    </S.ArrowContainer>
  );
};
