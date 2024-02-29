import styled from 'styled-components';

export const Container = styled.div`
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
  background: var(${(props) => props.color});

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
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.$url});
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &.selected::after {
    opacity: 0.5;
  }
`;

export const CheckIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
