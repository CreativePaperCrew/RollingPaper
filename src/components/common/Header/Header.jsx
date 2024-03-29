import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './HeaderStyle';
import logoImg from '../../../assets/icons/mainIcon.svg';

const Header = () => {
  const location = useLocation();

  const isShouldShowButton =
    location.pathname === '/' || location.pathname === '/list';

  return (
    <S.HeaderContentContainer>
      <S.HeaderContent>
        <S.ButtonLink to="/">
          <S.LogoContainer>
            <img src={logoImg} alt="로고 이미지" />
            <S.LogoContent>Rolling</S.LogoContent>
          </S.LogoContainer>
        </S.ButtonLink>
        {isShouldShowButton && (
          <S.ButtonLink to="/post">
            <S.HeaderButton>롤링 페이퍼 만들기</S.HeaderButton>
          </S.ButtonLink>
        )}
      </S.HeaderContent>
    </S.HeaderContentContainer>
  );
};

export default Header;
