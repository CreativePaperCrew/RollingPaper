import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.8125rem;
  margin-bottom: 4.3125rem;
`;

export const ColorBox = styled.div`
  width: 10.5rem;
  height: 10.5rem;
  border: 0.0625rem solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  background-color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;
