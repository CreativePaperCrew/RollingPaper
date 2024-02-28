import React from 'react';
import * as S from './HomepageStyle';
import Header from '../../components/common/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import Button from '../../components/common/Button/Button';

const HomePage = () => {
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

export default HomePage;
