import styled from 'styled-components';

export const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  padding: 0px 0.5rem;
  background: ${({ background }) => background};
  border-radius: 4px;
`;

export const Relationship = styled.p`
  color: ${({ color }) => color};
  font-size: var(--font-14);
  font-style: var(--font-regular);
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: -0.0044rem;
`;
