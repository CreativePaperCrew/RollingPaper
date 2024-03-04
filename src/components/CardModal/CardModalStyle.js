import styled from 'styled-components';
import { Button } from '../BackgroundTypeSelectButton/BackgroundTypeSelectButtonStyle';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 37.5rem;
  height: 29.75rem;
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.9375rem;
  border: 1px solid #dee2e6;
  background: #fff;
  z-index: 1000;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ModalCloseButton = styled(Button)`
  color: var(--white);
  background: var(--purple-600);
  font-size: var(--font-16);

  &:hover {
    background: var(--purple-700);
  }
`;

export const PostCardContainer = styled.div`
  width: 20rem;
  height: 14.375rem;
  padding: 1.75rem 1.5rem;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;

  @media (min-width: 768px) {
    width: 22rem;
    height: 17.75rem;
  }

  @media (min-width: 1248px) {
    width: 24rem;
    height: 17.5rem;
  }
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.9375rem;
  width: 100%;
  padding-bottom: 0.9375rem;
  border-bottom: 1px solid var(--gray-200);
`;

export const CardProfile = styled.div`
  display: flex;
  gap: 0.875rem;
`;

export const ProfileImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid var(--gray-200);
  border-radius: 100px;
  background-color: var(--white);
`;

export const ProfileImg = styled.img`
  width: 100%;
  border-radius: 100%;
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
`;

export const ContentContainer = styled.div`
  height: 15rem;
`;

export const Content = styled.p`
  width: 100%;
  height: 100%;
  color: var(--gray-600);
  font-size: var(--font-15);
  line-height: 1.5rem;
  overflow: auto;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

export const CardDate = styled.span`
  position: absolute;
  top: 4.7rem;
  right: 2.5rem;
  color: var(--gray-400);
  font-size: var(--font-14);
  line-height: 1.125rem;
  @media (max-width: 768px) {
    right: 2rem;
  }
`;
