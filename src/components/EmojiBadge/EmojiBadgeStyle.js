import styled from 'styled-components';

export const EmojiBadgeContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 0.5rem 0.75rem;
  align-items: center;
  gap: 0.125rem;
  border-radius: 2rem;
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
