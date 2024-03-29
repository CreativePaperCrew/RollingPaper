import styled from 'styled-components';

export const SelectedOption = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  width: 20rem;
  color: var(--gray-900);
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
  z-index: 999;

  &:hover {
    cursor: pointer;
    border: 0.0625rem solid var(--gray-500);
  }
`;

export const OptionList = styled.li`
  position: absolute;
  left: -0.0063rem;
  top: 3.25rem;
  padding: 0.625rem 0;
  width: 320px;
  border-radius: 8px;
  border: 1px solid var(--gray-300);
  background: var(--white);
  box-shadow: 0rem 2px 12px 0rem rgba(0, 0, 0, 0.08);
  list-style: none;
`;

export const Option = styled.ul`
  padding: 0.75rem 1rem;
  color: var(--gray-900);
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
  height: 3.125rem;

  &:hover {
    background: var(--gray-100);
  }
`;
