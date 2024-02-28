import styled from 'styled-components';

export const EmojiPickerContainer = styled.div`
  .EmojiPickerReact {
    --epr-emoji-size: 1.5rem !important;
    --epr-category-navigation-button-size: 1.5rem !important;
    --epr-preview-text-size: 12px !important;
    .epr-emoji-category-label {
      font-size: 0.8125rem;
    }
  }
`;

export const EmojiPickerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.38rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
`;

export const EmojiPickerButtonText = styled.span`
  color: var(--gray-900, #181818);
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`;

export const EmojiPickerButtonIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
