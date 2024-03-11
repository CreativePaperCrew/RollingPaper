import styled from 'styled-components';
import { VIEWPORT_SIZE } from '../../constants/viewportSize';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5625rem;
`;

export const LeftAlignFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 45rem;
  margin-bottom: 3.75rem;

  @media (${VIEWPORT_SIZE.mobile}) {
    width: 20.625rem;
  }
`;

export const Receiver = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 3.125rem;
`;

export const Title = styled.p`
  color: var(--gray-900);
  font-size: var(--font-24);
  font-weight: var(--font-bold);
  line-height: 2.625rem;
  letter-spacing: -0.015rem;
`;

export const BackgroundSelection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
`;

export const InformationMessage = styled.div`
  color: var(--gray-500);
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
`;
