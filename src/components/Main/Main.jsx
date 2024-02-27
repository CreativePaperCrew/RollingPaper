import MainContent from '../MainContent/MainContent';
import Button from '../common/Button/Button';
import { ButtonContainer, MainContentContainer } from './MainStyled';

const Main = () => {
  return (
    <>
      <MainContentContainer>
        <MainContent />
      </MainContentContainer>
      <ButtonContainer>
        <Button text="구경해보기" to="/list" width={17.5} />
      </ButtonContainer>
    </>
  );
};

export default Main;
