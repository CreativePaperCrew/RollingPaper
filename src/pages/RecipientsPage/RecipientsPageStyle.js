import styled from 'styled-components';
import { Button } from '../../components/common/Buttons/Button/ButtonStyle';
import { VIEWPORT_SIZE } from '../../constants/viewportSize';

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
  position: absolute;
  top: 187px;
  left: 50%;
  right: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  width: 74rem;
  height: 2.4375rem;
  z-index: 1;

  @media (${VIEWPORT_SIZE.tablet}) {
    position: fixed;
    top: 92%;
    width: 100%;
    height: 3.5rem;
  }
`;

export const DeleteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 2.4375rem;
  width: 74rem;

  @media (${VIEWPORT_SIZE.tablet}) {
    justify-content: center;
    height: 3.4375rem;
  }
`;

export const DeleteButton = styled(Button)`
  display: flex;
  white-space: nowrap;

  @media (${VIEWPORT_SIZE.tablet}) {
    width: 45.25rem;
    padding: 0.875rem 1.5rem;
    border-radius: 0.75rem;
    font-size: var(--font-18);
    font-weight: var(--font-bold);
    letter-spacing: -0.0112rem;
  }

  @media (${VIEWPORT_SIZE.mobile}) {
    width: 20rem;
  }
`;

export const RecipientsCardsContainer = styled.div`
  display: grid;
  padding: 0 2.4rem;
  grid-template-columns: repeat(3, 24rem);
  grid-template-rows: repeat(auto-fit, 17.5rem);

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

  @media (${VIEWPORT_SIZE.tablet}) {
    grid-template-columns: repeat(2, 22.125rem);
    grid-template-rows: repeat(auto-fit, 17.75rem);
  }

  @media (${VIEWPORT_SIZE.mobile}) {
    grid-template-columns: repeat(1, 20rem);
    grid-template-rows: repeat(auto-fit, 14.375rem);
  }
`;

export const TargetedLine = styled.div`
  width: 100%;
  height: 10px;
`;

export const ArrowContainer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 6.25rem;

  -webkit-animation: bounce 800ms infinite;
  animation: bounce 800ms infinite;
  z-index: 1;

  @media (${VIEWPORT_SIZE.tablet}) {
    right: 2%;
    bottom: 9.375rem;
  }

  @media (${VIEWPORT_SIZE.mobile}) {
    right: 4%;
    bottom: 7.9rem;
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
