import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { VIEWPORT_SIZE } from '../../../constants/viewportSize';

export const HeaderContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1.5rem;

  @media (min-width: 1200px) {
    max-width: 75.4375rem;
    padding: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoContent = styled.h2`
  color: #4a494f;
  text-align: center;
  font-size: var(--font-20);
  font-style: normal;
  font-weight: var(--font-bold);
  line-height: normal;
`;

export const HeaderButton = styled.button`
  display: flex;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.375rem;
  border: 1px solid var(--gray-300);
  background: var(--white);
  cursor: pointer;
  &:hover {
    background: var(--gray-100);
  }
  color: var(--gray-900);
  text-align: center;
  font-size: var(--font-16);
  font-style: normal;
  font-weight: var(--font-bold);
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
`;
