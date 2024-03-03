import React from 'react';
import * as S from './HomepageStyle';
import MainContent from '../../components/MainContent/MainContent';

const HomePage = () => {
  return (
    <>
      <S.MainContentContainer>
        <MainContent />
      </S.MainContentContainer>
      <S.ButtonContainer>
        <S.ButtonLink to="/list">
          <S.CustomButton size="medium">구경해보기</S.CustomButton>
        </S.ButtonLink>
      </S.ButtonContainer>
    </>
  );
};

export default HomePage;
