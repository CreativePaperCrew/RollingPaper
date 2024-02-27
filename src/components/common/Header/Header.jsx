import {
  HeaderButton,
  HeaderContainer,
  HeaderContent,
  HeaderContentContainer,
  LogoContainer,
  LogoContent,
} from './HeaderStyled';
import LogoImg from '../../../assets/images/logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <HeaderContent>
          <LogoContainer>
            <img src={LogoImg} alt="로고 이미지" />
            <LogoContent>Rolling</LogoContent>
          </LogoContainer>
          <HeaderButton>롤링 페이퍼 만들기</HeaderButton>
        </HeaderContent>
      </HeaderContentContainer>
    </HeaderContainer>
  );
};

export default Header;