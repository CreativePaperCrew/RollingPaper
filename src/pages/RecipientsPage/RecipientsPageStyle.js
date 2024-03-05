import styled from 'styled-components';

export const RecipientsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 20rem);
  grid-template-rows: repeat(auto-fit, 14.375rem);
  justify-content: center;
  gap: 1rem;
  align-items: center;
  padding: 7.06rem 0 2.375rem;
  background-color: ${(props) => `var(${props.$backgroundColor}, transparent)`};
  background-image: ${(props) =>
    props.$backgroundImageURL ? `url(${props.$backgroundImageURL})` : 'none'};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 22.125rem);
    grid-template-rows: repeat(auto-fit, 17.75rem);
    padding-bottom: 5.6875rem;
  }

  @media (min-width: 1248px) {
    grid-template-columns: repeat(3, 24rem);
    grid-template-rows: repeat(auto-fit, 17.5rem);
    padding-bottom: 15.375rem;
  }
`;

export const TargetedLine = styled.div`
  width: 100%;
  height: 10px;
`;
