import styled from 'styled-components';
import { VIEWPORT_SIZE } from '../../constants/viewportSize';

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
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);

  @media (${VIEWPORT_SIZE.mobile}) {
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
  @media (${VIEWPORT_SIZE.mobile}) {
    margin: 0;
  }
`;

export const ArrowDownImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;
