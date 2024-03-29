import styled from 'styled-components';
import { VIEWPORT_SIZE } from '../../constants/viewportSize';

export const MainContentContainer = styled.main`
  display: flex;
  width: 75rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0.375rem 0;
  gap: 1.875rem;
  @media (${VIEWPORT_SIZE.tablet}) {
    margin: 3.0625rem 1.5rem;
  }
  @media (${VIEWPORT_SIZE.mobile}) {
    margin: 2.625rem 1.5rem 2.3125rem;
  }
`;

export const FirstContent = styled.section`
  display: flex;
  padding: 3.75rem 0 3.75rem 3.75rem;
  border-radius: 16px;
  background: var(--surface);
  gap: 9.5rem;
  overflow: hidden;
  @media (${VIEWPORT_SIZE.tablet}) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 2.25rem;
  }
  @media (${VIEWPORT_SIZE.mobile}) {
    max-width: 20rem;
    gap: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  @media (${VIEWPORT_SIZE.tablet}) {
    width: 80%;
    margin: 2.5rem 6.25rem 0 2.5rem;
  }
  @media (${VIEWPORT_SIZE.mobile}) {
    margin: 1.5rem 1.5rem 0 1.5rem;
  }
`;

export const PointButton = styled.button`
  display: flex;
  padding: 0.375rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 3.125rem;
  border: none;
  background: var(--purple-600);
  color: var(--white);
  font-size: var(--font-14);
  font-style: normal;
  font-weight: var(--font-bold);
  line-height: 1.25rem;
  letter-spacing: -0.0044rem;
  @media (${VIEWPORT_SIZE.mobile}) {
    padding: 0.25rem 0.75rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.05rem;
`;

export const MainDescription = styled.span`
  color: var(--gray-900);
  font-size: var(--font-24);
  font-weight: var(--font-bold);
  line-height: 2.25rem;
  letter-spacing: -0.015rem;
  white-space: normal;
  @media (${VIEWPORT_SIZE.mobile}) {
    font-size: var(--font-18);
    line-height: 1.75rem;
    letter-spacing: -0.0112rem;
  }
`;

export const LineBreak = styled.br`
  @media (${VIEWPORT_SIZE.tablet}) {
    display: none;
  }
`;

export const SubDescription = styled.p`
  color: var(--gray-500);
  font-size: var(--font-18);
  font-style: normal;
  font-weight: var(--font-regular);
  line-height: 1.75rem;
  letter-spacing: -0.0112rem;
  white-space: nowrap;
  @media (${VIEWPORT_SIZE.mobile}) {
    font-size: var(--font-15);
    line-height: 1.375rem;
    letter-spacing: -0.0094rem;
  }
`;
export const MainImg1 = styled.img`
  width: 45rem;
  height: 12.75rem;
  @media (${VIEWPORT_SIZE.mobile}) {
    width: 25rem;
    object-fit: contain;
  }
`;

export const MainImg2 = styled.img`
  width: 45rem;
  height: 13.75rem;
  @media (${VIEWPORT_SIZE.mobile}) {
    width: 27rem;
    object-fit: contain;
  }
`;

export const SecondContent = styled.section`
  display: flex;
  padding: 3.75rem 12rem 3.75rem 0;
  align-items: flex-start;
  border-radius: 1rem;
  background: var(--surface);
  @media (${VIEWPORT_SIZE.tablet}) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0;
    gap: 2.25rem;
  }
  @media (${VIEWPORT_SIZE.mobile}) {
    max-width: 20rem;
    gap: 0;
  }
`;
