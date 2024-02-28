import styled from 'styled-components';

export const EmojiBadgeContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 8px 12px;
  align-items: center;
  gap: 2px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
`;

export const EmojiContainer = styled.div`
  height: 1.3125rem;
  line-height: 1.3125rem;
`;

export const ReactionCount = styled.div`
  color: var(--white);
  font-size: 1rem;
  line-height: 1.25rem;
`;
