import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

export const ErrorPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const ErrorImage = styled.img`
  width: 7.1rem;
  height: 8.5rem;
  animation: ${pulseAnimation} 2s infinite ease-in-out;
`;

export const MainMessage = styled.h1`
  color: #1f252b;
  font-size: var(--font-18);
  font-weight: var(--font-bold);
  margin: 1rem;
`;

export const SecondaryMessage = styled.p`
  color: var(--gray-500);
  font-size: var(--font-14);
  margin-bottom: 1rem;
`;
