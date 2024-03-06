import styled from 'styled-components';
import { VIEWPORT_SIZE } from '../../constants/viewportSize';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5625rem;
`;

export const LeftAlignFrame = styled.div`
  display: flex;
  gap: 3.125rem;
  flex-direction: column;
  align-items: left;
  width: 45rem;

  @media (${VIEWPORT_SIZE.mobile}) {
    width: 330px;
  }
`;

export const SectionFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Title = styled.p`
  color: var(--gray-900);
  font-size: var(--font-24);
  font-weight: var(--font-bold);
  line-height: 2.625rem;
  letter-spacing: -0.015rem;
`;

export const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const SelectedImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 70%;
`;

export const ImageSelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ProfileMessage = styled.p`
  color: var(--gray-500, #555);
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
`;

export const ImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 0.25rem;

  @media (${VIEWPORT_SIZE.mobile}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const AvaliableImages = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 70%;

  &:hover {
    cursor: pointer;
  }

  @media (${VIEWPORT_SIZE.mobile}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const MarginFrame = styled.div`
  width: 100%;
  margin-top: 3.875rem;
  margin-bottom: 3.75rem;

  @media (${VIEWPORT_SIZE.mobile}) {
    margin-top: 12.875rem;
    margin-bottom: 1.5rem;
  }
`;