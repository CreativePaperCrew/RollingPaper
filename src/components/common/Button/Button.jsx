import { Link } from 'react-router-dom';
import { ButtonContainer, CustomButton } from './ButtonStyled';

const Button = ({ text, to, width }) => {
  return (
    <ButtonContainer>
      <Link to={to} style={{ textDecoration: 'none' }}>
        <CustomButton width={width}>{text}</CustomButton>
      </Link>
    </ButtonContainer>
  );
};

export default Button;
