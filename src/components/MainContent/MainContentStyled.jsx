import styled from 'styled-components';

export const MainContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 75rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0.375rem 0;
  gap: 1.875rem;
  @media screen and (max-width: 1199px) {
    min-width: 45rem;
    margin: 3.0625rem 1.5rem;
  }
  @media screen and (max-width: 767px) {
    max-width: 20rem;
    margin: 2.625rem 1.5rem 2.3125rem;
  }
`;

export const FirstContent = styled.div`
  display: flex;
  padding: 3.75rem 0 3.75rem 3.75rem;
  border-radius: 1rem;
  background: var(--surface);
  gap: 9.5rem;
  overflow: hidden;
  @media screen and (max-width: 1199px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 2.25rem;
  }
  @media screen and (max-width: 767px) {
    max-width: 20rem;
    gap: 3.125rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  @media screen and (max-width: 1199px) {
    width: 80%;
    margin: 2.5rem 6.25rem 0 2.5rem;
  }
  @media screen and (max-width: 767px) {
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
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: -0.0044rem;
  @media screen and (max-width: 767px) {
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
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem;
  letter-spacing: -0.015rem;
  white-space: normal;
  @media screen and (max-width: 767px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    letter-spacing: -0.0112rem;
  }
`;
export const EmojiDescription = styled(MainDescription)`
  width: 14.8125rem;
`;

export const SubDescription = styled.p`
  color: var(--gray-500, #555);
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: -0.0112rem;
  white-space: nowrap;
  @media screen and (max-width: 767px) {
    font-size: 0.9375rem;
    line-height: 1.375rem;
    letter-spacing: -0.0094rem;
  }
`;
export const MainImg1 = styled.img`
  @media screen and (max-width: 767px) {
    width: 27.125rem;
  }
`;

export const MainImg2 = styled.img`
  @media screen and (max-width: 767px) {
    width: 20rem;
  }
`;

export const SecondContent = styled.div`
  display: flex;
  padding: 3.75rem 12rem 3.75rem 0;
  align-items: flex-start;
  border-radius: 1rem;
  background: var(--surface);
  @media screen and (max-width: 1199px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0;
    gap: 2.25rem;
  }
  @media screen and (max-width: 767px) {
    max-width: 20rem;
    gap: 3rem;
  }
`;
