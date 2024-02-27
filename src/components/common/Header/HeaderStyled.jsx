import styled from 'styled-components';

export const HeaderContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1.5rem;

  @media (min-width: 1200px) {
    max-width: 120rem;
    padding: 0 clamp(1.5rem, 2vw + 1rem, 12.5rem);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoContent = styled.h2`
  color: #4a494f;
  text-align: center;
  /* font-family: Poppins; */
  font-size: 1.2482rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const HeaderButton = styled.button`
  display: flex;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.375rem;
  border: 1px solid var(--gray-300);
  background: var(--white);
  &:hover {
    background: var(--gray-100);
  }
  color: var(--gray-900);
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem; /* 162.5% */
  letter-spacing: -0.01rem;
`;
