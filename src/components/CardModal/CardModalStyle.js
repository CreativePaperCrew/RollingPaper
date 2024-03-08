import styled from 'styled-components';
import { getfontStyle } from '../../FontStyle';
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
  padding: 1.25rem;
  z-index: 999;
  width: 21.25rem;
  height: 18.4375rem;
  border-radius: 16px;
  background: var(--white);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 37.5rem;
    height: 29.75rem;
    padding: 2.5rem;
  }
`;

export const ModalCloseButton = styled(Button)`
  position: absolute;
  left: 6.6875rem;
  bottom: 1.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background: var(--purple-600);
  font-size: var(--font-16);

  &:hover {
    background: var(--purple-700);
  }

  @media (min-width: 768px) {
    left: 15rem;
    bottom: 2.5rem;
  }
`;

export const ProfileImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid var(--gray-200);
  border-radius: 100px;
  background-color: var(--white);
`;

export const ProfileImg = styled.img`
  width: 100%;
  border-radius: 100%;
`;

export const ContentContainer = styled.div`
  height: 15rem;
`;

export const Content = styled.p`
  width: 100%;
  height: 6.625rem;
  margin-top: 1rem;
  padding-right: 0.9375rem;
  color: var(--gray-600);
  font-size: var(--font-15);
  ${(props) => getfontStyle(props.$font)}
  line-height: 1.5rem;
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

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    height: 15rem;
  }
`;

export const CardDate = styled.span`
  position: absolute;
  top: 3.5rem;
  right: 2.8125rem;
  color: var(--gray-400);
  font-size: var(--font-12);
  line-height: 1.125rem;
  @media (max-width: 768px) {
    right: 2rem;
  }
`;
