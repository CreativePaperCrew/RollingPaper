import ReactQuill from 'react-quill';
import styled, { css } from 'styled-components';

const ErrorBorder = css`
  border: 1px solid var(--error);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
    margin-bottom: 0.25rem;
    ${({ $isError }) => $isError && ErrorBorder}
  }

  .ql-editor.ql-blank::before {
    font-size: 0.875rem;
    font-style: normal;
    color: var(--gray-400);
  }
`;

export const ErrorMessage = styled.p`
  height: 0;
  color: var(--error);
  font-size: var(--font-14);
  line-height: 1.125rem;
  letter-spacing: -0.0037rem;
`;
