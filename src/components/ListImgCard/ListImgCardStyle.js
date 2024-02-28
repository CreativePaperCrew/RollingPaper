import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 17.1875rem;
  height: 16.25rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: var(--white);
  box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.08);
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.54) 0%,
      rgba(0, 0, 0, 0.54) 100%
    ),
    url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  padding: 1.875rem 1.5rem 1.25rem;
`;

export const CardContentContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.6875rem;
`;

export const RecipientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const Recipient = styled.h2`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  overflow: hidden;
  color: var(--white);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: var(--font-24);
  font-style: normal;
  font-weight: var(--font-bold);
  line-height: 2.25rem;
  letter-spacing: -0.015rem;
`;

export const MessageCountContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MessageCount = styled.span`
  color: var(--gray-200);
  font-family: Pretendard;
  font-size: var(--font-16);
  font-style: normal;
  font-weight: var(--font-bold);
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
`;

export const MessageCountText = styled.p`
  color: var(--gray-200);
  font-family: Pretendard;
  font-size: var(--font-16);
  font-style: normal;
  font-weight: var(--font-regular);
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
`;

export const EmojiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const Divider = styled.div`
  width: 14.1875rem;
  height: 0.0625rem;
  background: rgba(0, 0, 0, 0.12);
  z-index: 10;
`;
