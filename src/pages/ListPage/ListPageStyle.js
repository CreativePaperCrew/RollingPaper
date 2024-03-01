import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.625rem;
  margin: 2.5rem 1.5rem 2.625rem;
  @media screen and (min-width: 1200px) {
    margin: 3.125rem 0 2.5rem;
    gap: 3.125rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin: 3.125rem 1.5rem 8.25rem;
    gap: 3.125rem;
  }
`;

export const ListCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 72.5rem;
  gap: 1rem;
`;

export const ListCardTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  color: var(--black);
  font-size: var(--font-24);
  font-style: normal;
  font-weight: var(--font-bold);
  line-height: 2.25rem;
  letter-spacing: -0.015rem;
  @media screen and (max-width: 767px) {
    font-weight: 600;
  }
`;

export const ButtonContainer = styled.div`
  padding: 1.5rem 0;
  @media screen and (max-width: 1199px) {
    padding: 1.5rem 1.5rem;
  }
  @media screen and (max-width: 767px) {
    padding: 1.5rem 1.25rem;
  }
`;
