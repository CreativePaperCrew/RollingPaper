import styled from 'styled-components';

export const WritersListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6875rem;
  ${(props) => (props.$onlyDesktop ? 'display: none;' : 'display: flex;')}
  @media (max-width: 1200px) {
    ${(props) => (props.$onlyDesktop ? 'display: flex;' : 'display: none')}
  }
`;

export const TextArea = styled.div`
  color: var(--gray-900, #181818);
  font-size: 1.125rem;
  line-height: 1.6875rem;
`;

export const BoldText = styled.span`
  font-weight: 700;
`;
