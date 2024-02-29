import styled from 'styled-components';

export const EmojiBadgesExpanded = styled.div`
  position: absolute;
  top: 120%;
  right: 40%;
  z-index: 1;
  display: inline-grid;
  grid: '. . . .';
  padding: 1.5rem;
  row-gap: 0.625rem;
  column-gap: 0.5rem;
  background-color: var(--white);
  border-radius: 0.5rem;
  border: 0.0625rem solid #b6b6b6;
  box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.08);
  @media (max-width: 48rem) {
    grid: '. . .';
    padding: 1rem;
  }
`;

export const ArrowDownButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0.375rem;
  margin-right: 0.5rem;
  @media (max-width: 48rem) {
    margin: 0;
  }
`;

export const ArrowDownImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;
