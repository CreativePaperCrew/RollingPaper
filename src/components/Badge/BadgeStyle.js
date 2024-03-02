import styled from 'styled-components';

export const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  padding: 0 0.5rem;
  background: var(${({ $background }) => $background});
  border-radius: 0.25rem;
`;

export const Relationship = styled.p`
  color: var(${({ $color }) => $color});
  font-size: var(--font-14);
  font-style: var(--font-regular);
  line-height: 1.25rem;
  letter-spacing: -0.0044rem;
`;
