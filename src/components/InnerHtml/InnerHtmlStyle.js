import styled from 'styled-components';
import { getfontStyle } from '../../FontStyle';

export const HtmlContent = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
  color: var(--gray-600, #4a4a4a);
  font-size: var(--font-15);
  line-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  list-style: inside;

  & * {
    ${(props) => getfontStyle(props.$font)}
  }

  @media (min-width: 768px) {
    -webkit-line-clamp: 3;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;
