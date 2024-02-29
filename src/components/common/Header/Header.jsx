import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './HeaderStyle';
import LogoImg from '../../../assets/icons/icon.svg';

const Header = () => {
  const location = useLocation();

  const shouldShowButton =
    location.pathname === '/' || location.pathname === '/list';

  return (
    <>
      <S.HeaderContentContainer>
        <S.HeaderContent>
          <S.ButtonLink to="/">
            <S.LogoContainer>
              <img src={LogoImg} alt="로고 이미지" />
              <S.LogoContent>Rolling</S.LogoContent>
            </S.LogoContainer>
          </S.ButtonLink>
          {shouldShowButton && (
            <S.ButtonLink to="/post">
              <S.HeaderButton>롤링 페이퍼 만들기</S.HeaderButton>
            </S.ButtonLink>
          )}
        </S.HeaderContent>
      </S.HeaderContentContainer>
      <S.HeaderLine />
    </>
  );
};

export default Header;
