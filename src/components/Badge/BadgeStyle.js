import styled from 'styled-components';

export const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  padding: 0 0.5rem;
<<<<<<< HEAD
  background: var(${({ background }) => background});
=======
  background: ${({ $background }) => $background};
>>>>>>> ad021c7c0a6f3f95952f691f59210ecf13fb164a
  border-radius: 0.25rem;
`;

export const Relationship = styled.p`
<<<<<<< HEAD
  color: var(${({ color }) => color});
=======
  color: ${({ $color }) => $color};
>>>>>>> ad021c7c0a6f3f95952f691f59210ecf13fb164a
  font-size: var(--font-14);
  font-style: var(--font-regular);
  line-height: 1.25rem;
  letter-spacing: -0.0044rem;
`;
