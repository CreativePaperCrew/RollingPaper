import ReactQuill from 'react-quill';
import styled, { css } from 'styled-components';

const ErrorBorder = css`
  border: 1px solid var(--error);
`;

export const TextEditor = styled(ReactQuill)`
  &.quill {
    width: 100%;
    border-radius: 0.5rem;
  }

  .ql-toolbar {
    background-color: var(--gray-200);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    ${({ $isError }) => $isError && ErrorBorder}
  }

  .ql-container {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    height: 13.125rem;
    ${({ $isError }) => $isError && ErrorBorder}
  }

  .ql-editor.ql-blank::before {
    font-size: 0.875rem;
    font-style: normal;
    color: var(--gray-400);
  }
`;
