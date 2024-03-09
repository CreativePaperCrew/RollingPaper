import styled from 'styled-components';
import { Button } from '../../components/common/Buttons/Button/ButtonStyle';

export const RecipientsCardsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 20rem);
  grid-template-rows: repeat(auto-fit, 14.375rem);
  justify-content: center;
  gap: 1rem;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 7.06rem 0 5.6875rem;
  background-color: ${(props) => `var(${props.$backgroundColor}, transparent)`};
  background-image: ${(props) =>
    props.$backgroundImageURL ? `url(${props.$backgroundImageURL})` : 'none'};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 22.125rem);
    grid-template-rows: repeat(auto-fit, 17.75rem);
  }

  @media (min-width: 1248px) {
    grid-template-columns: repeat(3, 24rem);
    grid-template-rows: repeat(auto-fit, 17.5rem);
  }
`;

export const EditContainer = styled.div`
  position: fixed;
  left: 50%;
  right: 50%;
  transform: translate(-50%);
  bottom: 24px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3.5rem;
  z-index: 1;

  @media (min-width: 1248px) {
    position: absolute;
    top: 187px;
    width: 74rem;
    height: 2.4375rem;
  }
`;

export const DeleteContainer = styled.div`
  display: flex;

  @media (min-width: 1248px) {
    justify-content: flex-end;
    height: 2.4375rem;
    width: 74rem;
  }
`;

export const DeleteButton = styled(Button)`
  display: flex;
  white-space: nowrap;

  @media (min-width: 768px) {
    width: 45rem;
  }
  @media (min-width: 1248px) {
    width: 5.75rem;
  }
`;

export const TargetedLine = styled.div`
  width: 100%;
  height: 10px;
`;
