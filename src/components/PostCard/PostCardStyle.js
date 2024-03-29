import styled, { css } from 'styled-components';
import { VIEWPORT_SIZE } from '../../constants/viewportSize';

const fadeInUpKeyframes = css`
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const PostCardContainer = styled.article`
  position: relative;
  width: 24rem;
  height: 17.5rem;
  padding: 1.75rem 1.5rem;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
  ${fadeInUpKeyframes}
  animation: ${(props) =>
    props.$runAnimation ? 'fadeInUp 1s ease-in-out forwards' : 'none'};
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  &:hover button {
    background-color: var(--gray-600);
  }

  &:active button {
    background-color: var(--gray-700);
  }

  &:focus button {
    background-color: var(--gray-800);
  }

  &:disabled button {
    background-color: var(--gray-300);
  }

  @media (${VIEWPORT_SIZE.tablet}) {
    width: 22rem;
    height: 17.75rem;
  }

  @media (${VIEWPORT_SIZE.mobile}) {
    width: 20rem;
    height: 14.375rem;
  }
`;

export const PostCardTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.9375rem;
  width: 100%;
  padding-bottom: 0.9375rem;
  border-bottom: 1px solid var(--gray-200);
`;

export const PostCardProfile = styled.div`
  display: flex;
  gap: 0.875rem;
`;

export const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid var(--gray-200);
  border-radius: 100%;
  background-color: var(--white);
  background-image: ${(props) =>
    props.$profileImageURL ? `url(${props.$profileImageURL})` : 'none'};
  background-size: cover;
  background-position: center;
`;

export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
`;

export const AuthorTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.375rem;
`;

export const AuthorFrom = styled.span`
  color: var(--black);
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.75rem;
`;

export const Author = styled.p`
  width: 10rem;
  color: var(--black);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.625rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (${VIEWPORT_SIZE.tablet}) {
    width: 8.125rem;
  }

  @media (${VIEWPORT_SIZE.mobile}) {
    width: 6.25rem;
  }
`;

export const ContentContainer = styled.div`
  height: 6.625rem;
  margin: 1rem 0;

  @media (${VIEWPORT_SIZE.tablet}) {
    height: 6.875rem;
  }

  @media (${VIEWPORT_SIZE.mobile}) {
    height: 3.5rem;
  }
`;

export const PostCardDate = styled.span`
  color: var(--gray-400);
  font-size: 0.75rem;
  line-height: 1.125rem;
`;

export const DeleteContainer = styled.div`
  position: absolute;
  top: 1.75rem;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  border: 1px solid var(--gray-300);
  border-radius: 6px;
`;

export const DeleteButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
