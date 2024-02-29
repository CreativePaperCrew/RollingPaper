import * as S from './HeaderStyle';
import LogoImg from '../../../assets/icons/icon.svg';

const Header = () => {
  return (
    <S.HeaderContentContainer>
      <S.HeaderContent>
        <S.ButtonLink to="/">
          <S.LogoContainer>
            <img src={LogoImg} alt="로고 이미지" />
            <S.LogoContent>Rolling</S.LogoContent>
          </S.LogoContainer>
        </S.ButtonLink>

        <S.ButtonLink to="/post">
          <S.HeaderButton>롤링 페이퍼 만들기</S.HeaderButton>
        </S.ButtonLink>
      </S.HeaderContent>
    </S.HeaderContentContainer>
  );
};

export default Header;
