import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  margin-bottom: 0.25rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: var(--white);
  border: 0.0625rem solid var(--gray-300);
  color: var(--gray-500);
  font-family: Pretendard;
  font-size: 1rem;
  line-height: 1.625rem;
  letter-spacing: -0.01rem;

  &:focus {
    border: 0.125rem solid var(--gray-500);
    color: var(--gray-900);
  }

  &:active {
    border: 0.125rem solid var(--gray-700);
    color: var(--gray-900);
  }

  &:hover {
    border: 0.0625rem solid var(--gray-500);
  }

  &:disabled {
    background: var(--gray-100);
    color: var(--gray-400);
  }

  &.errorMessage {
    border: 0.0625rem solid var(--error);
    color: var(--gray-900);
  }
`;

export const ErrorMessage = styled.p`
  display: none;
  height: 0;
  color: var(--error);
  font-family: Pretendard;
  font-size: var(--font-14);
  line-height: 1.125rem;
  letter-spacing: -0.0037rem;

  &.errorMessage {
    display: block;
  }
`;
