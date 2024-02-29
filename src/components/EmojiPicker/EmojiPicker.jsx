import React from 'react';

import { useState } from 'react';
import Picker from 'emoji-picker-react';
import {
  EmojiPickerContainer,
  EmojiPickerButton,
  EmojiPickerButtonIcon,
  EmojiPickerButtonText,
} from './EmojiPickerStyle';

import emojiPickerImage from '../../assets/icons/emojiPicker.svg';

const EmojiPicker = () => {
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const handleEmojiPick = (emojiObject) => {
    alert(emojiObject.emoji + emojiObject.names.join(', '));
    setIsEmojiPickerOpen(false);
  };

  return (
    <EmojiPickerContainer>
      <EmojiPickerButton
        onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
      >
        <EmojiPickerButtonIcon
          src={emojiPickerImage}
          alt="smiling face icon to add emoji"
        />
        <EmojiPickerButtonText>추가</EmojiPickerButtonText>
      </EmojiPickerButton>

      <Picker
        emojiStyle="native"
        open={isEmojiPickerOpen}
        width={300}
        height={400}
        onEmojiClick={handleEmojiPick}
      />
    </EmojiPickerContainer>
  );
};

export default EmojiPicker;
