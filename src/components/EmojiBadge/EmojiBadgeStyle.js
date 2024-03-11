import styled from 'styled-components';
import { VIEWPORT_SIZE } from '../../constants/viewportSize';

export const EmojiBadgeContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 0.5rem 0.75rem;
  align-items: center;
  gap: 0.125rem;
  border-radius: 2rem;
  background: rgba(0, 0, 0, 0.54);

  @media (${VIEWPORT_SIZE.mobile}) {
    padding: 0.25rem 0.5rem;
  }
`;

export const EmojiContainer = styled.div`
  height: 1.3125rem;
  line-height: 1.3125rem;

  @media (${VIEWPORT_SIZE.mobile}) {
    font-size: 0.875rem;
  }
`;

export const ReactionCount = styled.div`
  color: var(--white);
  font-size: 1rem;
  line-height: 1.25rem;

  @media (${VIEWPORT_SIZE.mobile}) {
    font-size: 0.875rem;
  }
`;
