import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ErrorBorder = css`
  border: 0.0625rem solid var(--error);
  color: var(--gray-900);
`;

export const Input = styled.input`
  margin-bottom: 0.25rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: var(--white);
  border: 0.0625rem solid var(--gray-300);
  color: var(--gray-500);
  font-size: 1rem;
  line-height: 1.625rem;
  letter-spacing: -0.01rem;

  &:hover {
    border: 0.0625rem solid var(--gray-500);
  }

  &:focus {
    border: 0.125rem solid var(--gray-500);
    color: var(--gray-900);
  }

  &:active {
    border: 0.125rem solid var(--gray-700);
    color: var(--gray-900);
  }

  &:disabled {
    background: var(--gray-100);
    color: var(--gray-400);
  }

  ${({ $isError }) => $isError && ErrorBorder}
`;

export const ErrorMessage = styled.p`
  height: 0;
  color: var(--error);
  font-size: var(--font-14);
  line-height: 1.125rem;
  letter-spacing: -0.0037rem;
`;
