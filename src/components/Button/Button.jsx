import { useNavigate } from 'react-router-dom';
import { ButtonContainer, CustomButton } from './ButtonStyled';

const Button = ({ text, to, width }) => {
  const navigate = useNavigate();

  return (
    <ButtonContainer>
      <CustomButton onClick={() => navigate(to)} width={width}>
        {text}
      </CustomButton>
    </ButtonContainer>
  );
};

export default Button;
