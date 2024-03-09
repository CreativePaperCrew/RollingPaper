import * as S from './MainContentStyle';
import mainimg1 from '../../assets/images/mainImg1.webp';
import mainimg2 from '../../assets/images/mainImg2.webp';

const MainContent = () => {
  return (
    <S.MainContentContainer>
      <S.FirstContent>
        <S.TextContainer>
          <S.PointButton>Point. 01</S.PointButton>
          <S.DescriptionContainer>
            <S.MainDescription>
              누구나 손쉽게, 온라인
              <S.LineBreak /> 롤링 페이퍼를 만들 수 있어요
            </S.MainDescription>
            <S.SubDescription>로그인 없이 자유롭게 만들어요.</S.SubDescription>
          </S.DescriptionContainer>
        </S.TextContainer>
        <S.MainImg1 src={mainimg1} alt="롤링 페이퍼 카드 메인 이미지" />
      </S.FirstContent>
      <S.SecondContent>
        <S.MainImg2 src={mainimg2} alt="이모지 메인 이미지" />
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
