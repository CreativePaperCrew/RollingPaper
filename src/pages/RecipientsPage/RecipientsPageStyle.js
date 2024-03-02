import styled from 'styled-components';

export const RecipientsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 20rem);
  grid-template-rows: repeat(auto-fit, 14.375rem);
  justify-content: center;
  gap: 1rem;
  align-items: center;
  height: 100vh;
<<<<<<< HEAD:src/pages/PostPage/PostPageStyle.js
  padding: 2rem 1.25rem;
  overflow: scroll;
  scrollbar-width: none;
=======
  padding-top: 7.06rem;
  background-color: ${(props) => `var(${props.$backgroundColor}, transparent)`};
  background-image: ${(props) =>
    props.$backgroundImageURL ? `url(${props.$backgroundImageURL})` : 'none'};
  background-size: cover;
  background-position: center;
>>>>>>> b0f014d316eff613c727b2cac7a4874b6224cc34:src/pages/RecipientsPage/RecipientsPageStyle.js

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 22.125rem);
    grid-template-rows: repeat(auto-fit, 17.75rem);
<<<<<<< HEAD:src/pages/PostPage/PostPageStyle.js
    padding: 5.8125rem 1.5rem;
=======
>>>>>>> b0f014d316eff613c727b2cac7a4874b6224cc34:src/pages/RecipientsPage/RecipientsPageStyle.js
  }

  @media (min-width: 1248px) {
    grid-template-columns: repeat(3, 24rem);
    grid-template-rows: repeat(auto-fit, 17.5rem);
<<<<<<< HEAD:src/pages/PostPage/PostPageStyle.js
    padding: 7.0625rem 0;
=======
>>>>>>> b0f014d316eff613c727b2cac7a4874b6224cc34:src/pages/RecipientsPage/RecipientsPageStyle.js
  }
`;
