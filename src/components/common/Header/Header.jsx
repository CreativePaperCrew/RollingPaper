import { Link } from 'react-router-dom';
import * as S from './HeaderStyle';
import LogoImg from '../../../assets/images/logo.svg';

const Header = () => {
  return (
    <S.HeaderContentContainer>
      <S.HeaderContent>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <S.LogoContainer>
            <img src={LogoImg} alt="로고 이미지" />
            <S.LogoContent>Rolling</S.LogoContent>
          </S.LogoContainer>
        </Link>
        <Link to="/post" style={{ textDecoration: 'none' }}>
          <S.HeaderButton>롤링 페이퍼 만들기</S.HeaderButton>
        </Link>
      </S.HeaderContent>
    </S.HeaderContentContainer>
  );
};

export default Header;
