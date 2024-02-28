import MainContent from '../MainContent/MainContent';
import Button from '../common/Button/Button';
import Header from '../common/Header/Header';
import * as S from './MainStyle';

const Main = () => {
  return (
    <>
      <Header />
      <S.MainContentContainer>
        <MainContent />
      </S.MainContentContainer>
      <S.ButtonContainer>
        <Button text="구경해보기" to="/list" width={17.5} />
      </S.ButtonContainer>
    </>
  );
};

export default Main;
