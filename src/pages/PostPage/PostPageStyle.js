import styled from 'styled-components';

export const PostCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 20rem);
  grid-template-rows: repeat(auto-fit, 14.375rem);
  justify-content: center;
  gap: 1rem;
  align-items: center;
  height: 100vh;
  padding: 0 1.25rem 0;
  overflow: scroll;
  scrollbar-width: none;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 22.125rem);
    grid-template-rows: repeat(auto-fit, 17.75rem);
    padding: 0 1.5rem;
  }

  @media (min-width: 1248px) {
    grid-template-columns: repeat(3, 24rem);
    grid-template-rows: repeat(auto-fit, 17.5rem);
    padding: 0;
  }
`;
