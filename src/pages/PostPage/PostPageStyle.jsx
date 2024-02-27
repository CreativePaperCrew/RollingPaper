import styled from 'styled-components';

export const PostCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 32rem);
  grid-template-rows: repeat(auto-fit, 23rem);
  justify-content: center;
  gap: 1.6rem;
  align-items: center;
  height: 100vh;
  padding: 0 2rem 0;
  overflow: scroll;
  scrollbar-width: none;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 35.4rem);
    grid-template-rows: repeat(auto-fit, 28.4rem);
    padding: 0 2.4rem;
  }

  @media (min-width: 1248px) {
    grid-template-columns: repeat(3, 38.4rem);
    grid-template-rows: repeat(auto-fit, 28rem);
    padding: 0;
  }
`;
