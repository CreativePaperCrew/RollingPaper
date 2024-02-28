import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.8125rem;
  margin-bottom: 4.3125rem;
`;

export const ColorBox = styled.div`
  position: relative;
  width: 10.5rem;
  height: 10.5rem;
  border: 0.0625rem solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  background: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 10.5rem;
  height: 10.5rem;
  border: 0.0625rem solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;

  &:hover {
    cursor: pointer;
  }
`;

export const CheckIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
