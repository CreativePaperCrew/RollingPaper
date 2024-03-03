import styled from 'styled-components';

export const WritersListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6875rem;
`;

export const ProfileCircles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileCircle = styled.div`
  /* flex-basis: calc(20% - 10px); */

  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.75rem;
  height: 1.75rem;
  flex-shrink: 0;
  margin-left: -0.625rem;

  background-image: url(${(props) => props.$imgUrl});
  background-size: cover;
  background-position: center;

  border-radius: 1.875rem;
  border: 0.0625rem solid white;
  overflow: hidden;
  color: var(--gray-500);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
  letter-spacing: -0.00375rem;
  &:last-child {
    background: var(--white);
    border: 0.0625rem solid #e3e3e3;
  }
`;

export const TextArea = styled.div`
  color: var(--gray-900, #181818);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6875rem;
`;

export const BoldText = styled.span`
  font-weight: 700;
`;
