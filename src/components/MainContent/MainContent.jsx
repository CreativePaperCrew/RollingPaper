import {
  DescriptionContainer,
  EmojiDescription,
  FirstContent,
  MainContentContainer,
  MainDescription,
  MainImg1,
  MainImg2,
  PointButton,
  SecondContent,
  SubDescription,
  TextContainer,
} from './MainContentStyled';
import Img1 from '../../assets/images/MainImg1.png';
import Img2 from '../../assets/images/MainImg2.png';

const MainContent = () => {
  return (
    <MainContentContainer>
      <FirstContent>
        <TextContainer>
          <PointButton>Point. 01</PointButton>
          <DescriptionContainer>
            <MainDescription>
              누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
            </MainDescription>
            <SubDescription>로그인 없이 자유롭게 만들어요.</SubDescription>
          </DescriptionContainer>
        </TextContainer>
        <MainImg1 src={Img1} alt="이미지1" />
      </FirstContent>
      <SecondContent>
        <MainImg2 src={Img2} alt="이미지2" />
        <TextContainer>
          <PointButton>Point. 02</PointButton>
          <DescriptionContainer>
            <EmojiDescription>
              서로에게 이모지로 감정을 표현해보세요
            </EmojiDescription>
            <SubDescription>
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </SubDescription>
          </DescriptionContainer>
        </TextContainer>
      </SecondContent>
    </MainContentContainer>
  );
};

export default MainContent;
