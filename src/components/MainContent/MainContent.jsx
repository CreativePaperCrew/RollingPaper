import * as S from './MainContentStyled';
import Img1 from '../../assets/images/MainImg1.png';
import Img2 from '../../assets/images/MainImg2.png';

const MainContent = () => {
  return (
    <S.MainContentContainer>
      <S.FirstContent>
        <S.TextContainer>
          <S.PointButton>Point. 01</S.PointButton>
          <S.DescriptionContainer>
            <S.MainDescription>
              누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
            </S.MainDescription>
            <S.SubDescription>로그인 없이 자유롭게 만들어요.</S.SubDescription>
          </S.DescriptionContainer>
        </S.TextContainer>
        <S.MainImg1 src={Img1} alt="이미지1" />
      </S.FirstContent>
      <S.SecondContent>
        <S.MainImg2 src={Img2} alt="이미지2" />
        <S.TextContainer>
          <S.PointButton>Point. 02</S.PointButton>
          <S.DescriptionContainer>
            <S.EmojiDescription>
              서로에게 이모지로 감정을 표현해보세요
            </S.EmojiDescription>
            <S.SubDescription>
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </S.SubDescription>
          </S.DescriptionContainer>
        </S.TextContainer>
      </S.SecondContent>
    </S.MainContentContainer>
  );
};

export default MainContent;
