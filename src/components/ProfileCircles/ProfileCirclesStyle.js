import styled from 'styled-components';

export const ProfileCirclesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const EmptyProfile = styled.div`
  width: 100%;
  height: 1.75rem;
`;

export const ProfileCircle = styled.div`
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
`;

export const LastCircle = styled(ProfileCircle)`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem;
  letter-spacing: -0.00375rem;
  background: var(--white);
  border: 0.0625rem solid #e3e3e3;
  width: auto;
  padding: 0.3125rem 0.375rem;
`;
