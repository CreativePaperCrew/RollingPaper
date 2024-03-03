import ReactQuill from 'react-quill';
import styled from 'styled-components';

export const TextEditor = styled(ReactQuill)`
  &.quill {
    width: 100%;
    height: 16.25rem;
    margin-bottom: 3.125rem;
  }

  .ql-toolbar {
    background-color: var(--gray-200);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .ql-container {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;
