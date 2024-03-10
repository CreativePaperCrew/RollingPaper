import styled from 'styled-components';
import { Button } from '../../components/common/Buttons/Button/ButtonStyle';

export const RecipientsBackground = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 7.06rem 0 5.6875rem;
  background-color: ${(props) => `var(${props.$backgroundColor}, transparent)`};
  background-image: ${(props) =>
    props.$backgroundImageURL ? `url(${props.$backgroundImageURL})` : 'none'};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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

export const RecipientsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 20rem);
  grid-template-rows: repeat(auto-fit, 14.375rem);
  justify-content: center;
  gap: 1rem;
  align-items: center;
  animation: fadeInUp 0.5s ease-out forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 22.125rem);
    grid-template-rows: repeat(auto-fit, 17.75rem);
  }

  @media (min-width: 1248px) {
    padding: 0 2.4rem;
    grid-template-columns: repeat(3, 24rem);
    grid-template-rows: repeat(auto-fit, 17.5rem);
  }
`;

export const TargetedLine = styled.div`
  width: 100%;
  height: 10px;
`;

export const ArrowContainer = styled.div`
  position: fixed;
  right: 2%;
  bottom: 130px;
  width: 100%;
  -webkit-animation: bounce 800ms infinite;
  animation: bounce 800ms infinite;
  z-index: 1;

  @media (min-width: 768px) {
  }

  @media (min-width: 1248px) {
    bottom: 100px;
  }
`;

export const ArrowDown = styled.div`
  position: fixed;
  width: 1.875rem;
  height: 0.4375rem;
  left: 50%;
  background: black;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 0% 0%;
  transform-origin: 0% 0%;
  border-radius: 1px;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 100%;
    border-radius: 1px;
    background: black;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }

  @-webkit-keyframes bounce {
    50% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
    }
  }

  @keyframes bounce {
    50% {
      -webkit-transform: translateY(-10px);
      transform: translateY(5px);
    }
  }
`;
