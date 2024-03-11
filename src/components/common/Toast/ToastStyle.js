import styled, { keyframes, css } from 'styled-components';
import { ReactComponent as CompletedSvg } from '../../../assets/icons/toast/completed.svg';
import { ReactComponent as FailedSvg } from '../../../assets/icons/toast/failed.svg';
import { ReactComponent as CloseSvg } from '../../../assets/icons/toast/close.svg';
import { VIEWPORT_SIZE } from '../../../constants/viewportSize';

const slideUp = keyframes`
  from {
    transform: translateY(100vh) translateX(-50%);
  }
  to {
    transform: translateY(0) translateX(-50%);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0) translateX(-50%);
  }
  to {
    transform: translateY(100vh) translateX(-50%);
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  width: 32.75rem;
  height: 4rem;
  bottom: 2rem;
  left: 50%;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.8);
  padding: 1.1875rem 1.875rem;
  display: flex;
  animation: ${(props) =>
    props.$isShown
      ? css`
          ${slideUp} 0.5s forwards
        `
      : css`
          ${slideDown} 2s forwards
        `};
  z-index: 999;

  @media (${VIEWPORT_SIZE.tablet}) {
    bottom: 6.25rem;
  }

  @media (${VIEWPORT_SIZE.mobile}) {
    width: 17.5rem;
    bottom: 5.5rem;
  }
`;

const IconStyle = css`
  margin-right: 8px;
  width: 1.5rem;
  height: 1.5rem;
`;

export const CompletedIcon = styled(CompletedSvg)`
  ${IconStyle}
`;

export const FailedIcon = styled(FailedSvg)`
  ${IconStyle}
`;

export const CloseIcon = styled(CloseSvg)`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
  cursor: pointer;
`;

export const Message = styled.span`
  align-items: flex-start;
  color: var(--white);
  font-size: var(--font-16);
  font-weight: var(--font-regular);
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
`;
