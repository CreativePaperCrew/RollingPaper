import styled from 'styled-components';

export const ArrowContainer = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  border: 1px solid var(--gray-300);
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.08);
`;

export const ArrowImg = styled.img`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  right: 0.75rem;
  bottom: 0.75rem;
`;
