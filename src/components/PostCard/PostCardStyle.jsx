import styled from 'styled-components';

export const PostCardContainer = styled.div`
  position: relative;
  width: 32rem;
  height: 23rem;
  padding: 2.8rem 2.4rem;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;

  @media (min-width: 768px) {
    width: 35.2rem;
    height: 28.4rem;
  }

  @media (min-width: 1248px) {
    width: 38.4rem;
    height: 28rem;
  }
`;

export const PostCardTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--gray-200);
`;

export const PostCardProfile = styled.div`
  display: flex;
  gap: 1.4rem;
`;

export const ProfileImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.6rem;
  height: 5.6rem;
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
  gap: 0.6rem;
`;

export const AuthorTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`;

export const AuthorFrom = styled.span`
  color: var(--black);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
`;

export const Author = styled.p`
  width: 10rem;
  color: var(--black);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.6rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    width: 13rem;
  }

  @media (min-width: 1248px) {
    width: 16rem;
  }
`;

export const ContentContainer = styled.div`
  height: 5.6rem;
  margin: 1.6rem 0;

  @media (min-width: 768px) {
    height: 11rem;
  }

  @media (min-width: 1248px) {
    height: 10.6rem;
  }
`;

export const Content = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
  color: var(--gray-600, #4a4a4a);
  font-size: 1.5rem;
  line-height: 2.4rem;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    -webkit-line-clamp: 3;
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`;

export const PostCardDate = styled.span`
  color: var(--gray-400, #999);
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

export const DeleteContainer = styled.div`
  position: absolute;
  top: 2.8rem;
  right: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  padding: 0.8rem;
  border: 1px solid var(--gray-300);
  border-radius: 6px;
`;

export const DeleteButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
