import styled from 'styled-components';
import { VIEWPORT_SIZE } from '../../constants/viewportSize';

export const EmojiPickerContainer = styled.div`
  position: relative;
  .EmojiPickerReact {
    position: absolute;
    top: 120%;
    right: 20%;
    z-index: 3;
    --epr-emoji-size: 1.5rem !important;
    --epr-category-navigation-button-size: 1.5rem !important;
    --epr-preview-text-size: 0.75rem !important;
    --epr-preview-text-padding: 0 1.25rem;
    .epr-emoji-category-label {
      font-size: 0.8125rem;
    }
    @media screen {
      right: -110%;
    }
  }
`;

export const EmojiPickerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 1rem;
  border-radius: 6px;
  border: 1px solid var(--gray-300);
  background: var(--white, #fff);

  @media (${VIEWPORT_SIZE.mobile}) {
    padding: 0.375rem 0.5rem;
  }
`;

export const EmojiPickerButtonText = styled.span`
  color: var(--gray-900);
  font-weight: 500;
  line-height: 1.5rem;

  @media (${VIEWPORT_SIZE.mobile}) {
    display: none;
  }
`;

export const EmojiPickerButtonIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  @media (${VIEWPORT_SIZE.mobile}) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
