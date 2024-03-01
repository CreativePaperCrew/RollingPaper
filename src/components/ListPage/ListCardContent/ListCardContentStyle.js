import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListCardsContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow-x: ${(props) => (props.$isScrollable ? 'scroll' : '')};
  gap: 1.25rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LinkStyle = styled(Link)`
  width: 17.1875rem;
`;

export const LeftArrowButtonContainer = styled.div`
  position: absolute;
  top: 6.875rem;
  left: -20px;
  cursor: pointer;
`;

export const RightArrowButtonContainer = styled.div`
  position: absolute;
  top: 6.875rem;
  right: -20px;
  cursor: pointer;
`;
