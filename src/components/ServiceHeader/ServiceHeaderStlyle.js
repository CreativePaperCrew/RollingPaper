import styled from 'styled-components';

export const ServiceHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75rem;
  margin: 0.8125rem auto;
  @media (max-width: 78rem) {
    width: 100%;
    padding: 0 1.5rem;
    margin: 0.8125rem 0;
  }
  @media (max-width: 48rem) {
    width: 100%;
    padding: 0 1.25rem;
    flex-direction: column;
    margin: 0;
  }
`;

export const HorizontalBar = styled.div`
  width: 100vw;
  height: 0.0625rem;
  background-color: #ededed;
  flex-shrink: 0;
  ${(props) => (props.$onlyMobile ? 'display: none;' : '')}
  @media (max-width: 48rem) {
    ${(props) => (props.$onlyMobile ? 'display: block;' : '')}
  }
`;

export const NameArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gray-800);
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2.625rem;
  letter-spacing: -0.0175rem;

  @media (max-width: 48rem) {
    width: 20rem;
    height: 3.25rem;
    justify-content: flex-start;
    font-size: 1.125rem;
  }
`;

export const OptionArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 48rem) {
    width: 20rem;
    height: 3.25rem;
    justify-content: flex-start;
  }
`;

export const VerticalBar = styled.div`
  width: 0.0625rem;
  height: 1.75rem;
  background: var(--gray-200);
  margin: 0 ${(props) => props.$margin};
  ${(props) => (props.$onlyMobile ? 'display: none;' : 'display: block;')}
  @media (max-width: 48rem) {
    ${(props) => (props.$onlyMobile ? 'display: block;' : 'display: none;')}
  }
`;
