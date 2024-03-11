import styled from 'styled-components';
import { VIEWPORT_SIZE } from '../../constants/viewportSize';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 2.8125rem;
  margin-bottom: 4.3125rem;

  @media (${VIEWPORT_SIZE.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
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

  @media (${VIEWPORT_SIZE.mobile}) {
    width: 9.625rem;
    height: 9.625rem;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 10.5rem;
  height: 10.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
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

  @media (${VIEWPORT_SIZE.mobile}) {
    width: 9.625rem;
    height: 9.625rem;
  }
`;

export const CheckIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
