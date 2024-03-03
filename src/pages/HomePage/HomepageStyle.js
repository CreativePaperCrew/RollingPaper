import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../components/common/Buttons/Button/ButtonStyle';

export const MainContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 3.75rem;
  margin-bottom: 1.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 1.5rem 0;
  @media screen and (max-width: 1199px) {
    padding: 1.5rem 1.5rem;
  }
  @media screen and (max-width: 767px) {
    padding: 1.5rem 1.25rem;
  }
`;

export const CustomButton = styled(Button)`
  @media screen and (max-width: 1199px) {
    width: 45rem;
  }
  @media screen and (max-width: 767px) {
    width: 20rem;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
`;
