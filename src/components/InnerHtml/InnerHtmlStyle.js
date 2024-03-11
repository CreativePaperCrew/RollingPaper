import styled, { css } from 'styled-components';
import { getFontStyle } from '../../FontStyle';
import { VIEWPORT_SIZE } from '../../constants/viewportSize';

const CardHtmlContent = css`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (${VIEWPORT_SIZE.mobile}) {
    -webkit-line-clamp: 2;
  }
`;

const ModalHtmlContent = css`
  width: 100%;
  height: 15rem;
  margin-top: 1rem;
  padding-right: 0.9375rem;
  overflow: scroll;
  overflow-x: hidden;
  font-size: 1.125rem;
  line-height: 1.75rem;

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

  @media (${VIEWPORT_SIZE.mobile}) {
    height: 100%;
    font-size: var(--font-15);
    line-height: 1.5rem;
  }
`;

export const HtmlContent = styled.div`
  width: 100%;
  color: var(--gray-600, #4a4a4a);
  font-size: var(--font-18);
  line-height: 1.75rem;
  list-style: inside;
  -webkit-line-clamp: 3;
  ${({ $isCard }) => ($isCard ? CardHtmlContent : ModalHtmlContent)}

  & * {
    ${(props) => getFontStyle(props.$font)}
  }

  @media (${VIEWPORT_SIZE.mobile}) {
    font-size: var(--font-15);
    line-height: 1.5rem;
  }
`;
