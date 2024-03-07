import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../components/common/Buttons/Button/ButtonStyle';
import { VIEWPORT_SIZE } from '../../constants/viewportSize';

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
  @media (${VIEWPORT_SIZE.tablet}) {
    padding: 1.5rem 1.5rem;
  }
  @media (${VIEWPORT_SIZE.mobile}) {
    padding: 1.5rem 1.25rem;
  }
`;

export const CustomButton = styled(Button)`
  @media (${VIEWPORT_SIZE.tablet}) {
    width: 45rem;
  }
  @media (${VIEWPORT_SIZE.mobile}) {
    width: 20rem;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
`;
