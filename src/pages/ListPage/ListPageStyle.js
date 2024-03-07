import styled from 'styled-components';
import { Button } from '../../components/common/Buttons/Button/ButtonStyle';
import { Link } from 'react-router-dom';
import { VIEWPORT_SIZE } from '../../constants/viewportSize';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3.125rem 0 2.5rem;
  gap: 3.125rem;
  @media (${VIEWPORT_SIZE.tablet}) {
    margin: 3.125rem 1.5rem 8.25rem;
    gap: 3.125rem;
  }
  @media (${VIEWPORT_SIZE.mobile}) {
    gap: 4.625rem;
    margin: 2.5rem 1.5rem 2.625rem;
  }
`;

export const ListCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 75rem;
  gap: 1rem;
`;

export const ListCardTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  color: var(--black);
  font-size: var(--font-24);
  font-weight: var(--font-bold);
  line-height: 2.25rem;
  letter-spacing: -0.015rem;
  @media (${VIEWPORT_SIZE.mobile}) {
    font-size: var(--font-20);
    font-weight: 600;
  }
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
