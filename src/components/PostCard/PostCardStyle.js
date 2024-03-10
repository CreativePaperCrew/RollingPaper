import styled from 'styled-components';
import { getfontStyle } from '../../FontStyle';

export const PostCardContainer = styled.div`
  position: relative;
  width: 20rem;
  height: 14.375rem;
  padding: 1.75rem 1.5rem;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;

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

  @media (min-width: 768px) {
    width: 22rem;
    height: 17.75rem;
  }

  @media (min-width: 1248px) {
    width: 24rem;
    height: 17.5rem;
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
  border-radius: 6.25rem;
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
  width: 6.25rem;
  color: var(--black);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.625rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    width: 8.125rem;
  }

  @media (min-width: 1248px) {
    width: 10rem;
  }
`;

export const ContentContainer = styled.div`
  height: 3.5rem;
  margin: 1rem 0;

  @media (min-width: 768px) {
    height: 6.875rem;
  }

  @media (min-width: 1248px) {
    height: 6.625rem;
  }
`;

export const Content = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
  color: var(--gray-600, #4a4a4a);
  font-size: var(--font-15);
  ${(props) => getfontStyle(props.$font)}
  line-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    -webkit-line-clamp: 3;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

export const PostCardDate = styled.span`
  color: var(--gray-400, #999);
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
