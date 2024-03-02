import styled from 'styled-components';

export const AddButtonContainer = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  border-radius: 100px;
  background: var(--gray-500);

  &:hover {
    background-color: var(--gray-600);
  }

  &:active {
    background-color: var(--gray-700);
  }

  &:focus {
    background-color: var(--gray-800);
  }

  &:disabled {
    background-color: var(--gray-300);
  }
`;