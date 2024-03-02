import styled from 'styled-components';

export const SelectedRelation = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.0625rem solid var(--gray-300);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  width: 20rem;
  color: var(--gray-900);
  line-height: 1.625rem;
  letter-spacing: -0.01rem;

  &:hover {
    border: 1px solid var(--gray-500);
  }
`;

export const RelationList = styled.li`
  position: absolute;
  left: 0;
  top: 3.25rem;
  padding: 0.625rem 0;
  width: 19.875rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid var(--gray-300);
  background: var(--white);
  box-shadow: 0rem 0.125rem 0.75rem 0rem rgba(0, 0, 0, 0.08);
  list-style: none;
`;

export const Relation = styled.ul`
  padding: 0.75rem 1rem;
  color: var(--gray-900);
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
  height: 3.125rem;

  &:hover {
    background: var(--gray-100);
  }
`;
