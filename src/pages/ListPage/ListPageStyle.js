import styled from 'styled-components';

export const ListCardsContainer = styled.div`
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
