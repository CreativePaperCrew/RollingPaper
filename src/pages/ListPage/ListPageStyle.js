import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.125rem;
  margin: 3.125rem 0 2.5rem;
`;

export const ListCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 72.5rem;
  gap: 1rem;
`;

export const ListCardTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  color: var(--black);
  font-family: Pretendard;
  font-size: var(--font-24);
  font-style: normal;
  font-weight: var(--font-bold);
  line-height: 2.25rem;
  letter-spacing: -0.015rem;
`;

export const ListCardsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  gap: 1.25rem;
  align-items: center;
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

export const LeftArrowButtonContainer = styled.div`
  position: absolute;
  top: 6.875rem;
  left: -20px;
  cursor: pointer;
`;

export const RightArrowButtonContainer = styled.div`
  position: absolute;
  top: 6.875rem;
  right: -20px;
  cursor: pointer;
`;
