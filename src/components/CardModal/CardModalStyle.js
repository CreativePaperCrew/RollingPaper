import styled from 'styled-components';
import { VIEWPORT_SIZE } from '../../constants/viewportSize';
import { getFontStyle } from '../../FontStyle';
import { Button } from '../BackgroundTypeSelectButton/BackgroundTypeSelectButtonStyle';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--white);
  width: 37.5rem;
  height: 29.75rem;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  z-index: 999;

  @media (${VIEWPORT_SIZE.mobile}) {
    width: 21.25rem;
    height: 18.4375rem;
    padding: 1.25rem;
  }
`;

export const ModalCloseButton = styled(Button)`
  position: absolute;
  left: 15rem;
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background: var(--purple-600);
  font-size: var(--font-16);

  &:hover {
    background: var(--purple-700);
  }

  @media (${VIEWPORT_SIZE.mobile}) {
    left: 6.6875rem;
    bottom: 1.125rem;
  }
`;

export const ProfileImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid var(--gray-200);
  border-radius: 100%;
  background-color: var(--white);
`;

export const ProfileImg = styled.img`
  width: 100%;
  border-radius: 100%;
`;

export const ContentContainer = styled.div`
  height: 15rem;

  @media (${VIEWPORT_SIZE.mobile}) {
    height: 7rem;
  }
`;

export const Content = styled.p`
  width: 100%;
  height: 15rem;
  margin-top: 1rem;
  padding-right: 0.9375rem;
  color: var(--gray-600);
  font-size: var(--font-18);
  line-height: 1.75rem;
  ${(props) => getFontStyle(props.$font)}
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.3125rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-300);
    border-radius: 12px;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }

  @media (${VIEWPORT_SIZE.mobile}) {
    height: 6.625rem;
    line-height: 1.5rem;
    font-size: var(--font-15);
  }
`;

export const CardDate = styled.span`
  position: absolute;
  top: 3.5rem;
  right: 2rem;
  color: var(--gray-400);
  font-size: var(--font-12);
  line-height: 1.125rem;

  @media (${VIEWPORT_SIZE.mobile}) {
    right: 2.8125rem;
  }
`;
