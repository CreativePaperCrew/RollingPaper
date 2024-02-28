import { Link } from 'react-router-dom';
import * as S from './ButtonStyle';

const Button = ({ text, to, width }) => {
  return (
    <S.ButtonContainer>
      <Link to={to} style={{ textDecoration: 'none' }}>
        <S.CustomButton width={width}>{text}</S.CustomButton>
      </Link>
    </S.ButtonContainer>
  );
};

export default Button;
