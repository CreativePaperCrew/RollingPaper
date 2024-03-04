import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 45rem;
`;

export const Button = styled.button`
  height: 2.5rem;
  width: 7.625rem;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: var(--gray-100);
  color: var(--gray-900);
  text-align: center;
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }

  &.clicked {
    padding: 0.4375rem 1rem;
    border: 0.125rem solid var(--purple-600);
    background: var(--white);
    color: var(--purple-700);
    font-weight: var(--font-bold);
  }
`;
