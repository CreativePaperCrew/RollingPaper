import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 17.1875rem;
  height: 16.25rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.$backgroundImageURL
      ? `background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.54) 0%,
          rgba(0, 0, 0, 0.54) 100%
        ), url(${props.$backgroundImageURL});`
      : `background: ${props.color};`}
  background-size: cover;
  background-position: center;
  box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.08);
  padding: 1.875rem 1.5rem 1.25rem;
  @media screen and (max-width: 767px) {
    width: 13rem;
    height: 14.5rem;
  }
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
  color: ${(props) =>
    props.$backgroundImageURL ? 'var(--white)' : 'var(--gray-900)'};
  text-overflow: ellipsis;
  font-size: var(--font-24);
  font-weight: var(--font-bold);
  line-height: 2.25rem;
  letter-spacing: -0.015rem;
  @media screen and (max-width: 767px) {
    font-size: var(--font-18);
    line-height: 1.75rem;
    letter-spacing: -0.0112rem;
  }
`;

export const MessageCountContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MessageCount = styled.span`
  color: ${(props) =>
    props.$backgroundImageURL ? 'var(--gray-200)' : 'var(--gray-700)'};
  font-size: var(--font-16);
  font-weight: var(--font-bold);
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
  @media screen and (max-width: 767px) {
    font-size: var(--font-14);
    line-height: 1.25rem;
    letter-spacing: -0.0044rem;
  }
`;

export const MessageCountText = styled.p`
  color: ${(props) =>
    props.$backgroundImageURL ? 'var(--gray-200)' : 'var(--gray-700)'};
  font-size: var(--font-16);
  font-weight: var(--font-regular);
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
  @media screen and (max-width: 767px) {
    font-size: var(--font-14);
    line-height: 1.25rem;
    letter-spacing: -0.0044rem;
  }
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
  @media screen and (max-width: 767px) {
    width: 10.125rem;
  }
`;

export const CardPattern = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  @media screen and (max-width: 767px) {
    width: 6.6875rem;
  }
`;
