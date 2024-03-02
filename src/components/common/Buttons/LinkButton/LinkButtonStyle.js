import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CustomButtonLink = styled(Link)`
  text-decoration: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const CustomButton = styled.button`
  display: flex;
  padding: 0.875rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.75rem;
  border: none;
  background: var(--purple-600);
  color: var(--white);
  text-align: center;
  font-size: var(--font-18);
  font-weight: var(--font-bold);
  line-height: 1.75rem;
  letter-spacing: -0.0112rem;
  width: ${(props) => (props.width ? `${props.width}rem` : 'auto')};
  cursor: pointer;

  &:hover {
    background: var(--purple-700);
  }

  &:disabled {
    background: var(--gray-200);
  }

  @media screen and (max-width: 1199px) {
    width: 45rem;
  }
  @media screen and (max-width: 767px) {
    width: 20rem;
  }
`;
