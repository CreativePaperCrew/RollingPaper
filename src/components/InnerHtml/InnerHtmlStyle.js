import styled, { css } from 'styled-components';
import { getfontStyle } from '../../FontStyle';

const CardHtmlContent = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ModalHtmlContent = css`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  padding-right: 0.9375rem;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.3125rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-300);
    border-radius: 12px;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    height: 15rem;
  }
`;

export const HtmlContent = styled.div`
  width: 100%;
  color: var(--gray-600, #4a4a4a);
  font-size: var(--font-15);
  line-height: 1.5rem;
  list-style: inside;
  ${({ $isCard }) => ($isCard ? CardHtmlContent : ModalHtmlContent)}

  & * {
    ${(props) => getfontStyle(props.$font)}
  }

  @media (min-width: 768px) {
    -webkit-line-clamp: 3;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;
