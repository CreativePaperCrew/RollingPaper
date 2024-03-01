import styled from 'styled-components';

export const ShareButtonContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  @media (max-width: 48rem) {
    padding: 0.375rem 0.5rem;
  }
`;

export const ShareDropdown = styled.div`
  position: absolute;
  top: 120%;
  right: 10%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 0.625rem 0;
  align-items: center;
  background-color: var(--white);
  border-radius: 0.5rem;
  border: 0.0625rem solid var(--gray-300);
  background: var(--white);
  box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.08);
  @media (min-width: 100rem) {
    right: -150%;
  }
`;

export const ShareOption = styled.div`
  display: flex;
  width: 8.625rem;
  padding: 0.75rem 1rem;
  align-items: center;
  color: var(--gray-900);
  font-weight: 400;
  line-height: 1.625rem;
  letter-spacing: -0.01rem;

  &:hover {
    cursor: pointer;
    background: var(--gray-100);
  }
`;

export const ShareIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  @media (max-width: 48rem) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
