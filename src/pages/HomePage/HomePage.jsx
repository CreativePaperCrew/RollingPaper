import React from 'react';
import * as S from './HomepageStyle';
import MainContent from '../../components/MainContent/MainContent';
import LinkButton from '../../components/common/LinkButton/LinkButton';

const HomePage = () => {
  return (
    <>
      <S.MainContentContainer>
        <MainContent />
      </S.MainContentContainer>
      <S.ButtonContainer>
        <LinkButton text="구경해보기" to="/list" width={17.5} />
      </S.ButtonContainer>
    </>
  );
};

export default HomePage;
