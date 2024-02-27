import { Link } from 'react-router-dom';
import {
  HeaderButton,
  HeaderContent,
  HeaderContentContainer,
  LogoContainer,
  LogoContent,
} from './HeaderStyled';
import LogoImg from '../../../assets/images/logo.svg';

const Header = () => {
  return (
    <HeaderContentContainer>
      <HeaderContent>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <LogoContainer>
            <img src={LogoImg} alt="로고 이미지" />
            <LogoContent>Rolling</LogoContent>
          </LogoContainer>
        </Link>
        <HeaderButton>롤링 페이퍼 만들기</HeaderButton>
      </HeaderContent>
    </HeaderContentContainer>
  );
};

export default Header;
