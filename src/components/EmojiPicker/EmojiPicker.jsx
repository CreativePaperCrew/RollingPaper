import React from 'react';

import useToggle from '../../hooks/useToggle';
import Picker from 'emoji-picker-react';
import {
  EmojiPickerContainer,
  EmojiPickerButton,
  EmojiPickerButtonIcon,
  EmojiPickerButtonText,
} from './EmojiPickerStyle';

import emojiPickerImage from '../../assets/icons/emojiPicker.svg';

const EmojiPicker = () => {
  const [isToggleOpen, changeToggle] = useToggle();
  const handleEmojiPick = (emojiObject) => {
    alert(emojiObject.emoji + emojiObject.names.join(', '));
    changeToggle();
  };

  return (
    <EmojiPickerContainer>
      <EmojiPickerButton onClick={changeToggle}>
        <EmojiPickerButtonIcon
          src={emojiPickerImage}
          alt="smiling face icon to add emoji"
        />
        <EmojiPickerButtonText>추가</EmojiPickerButtonText>
      </EmojiPickerButton>

      <Picker
        emojiStyle="native"
        open={isToggleOpen}
        width={300}
        height={400}
        onEmojiClick={handleEmojiPick}
      />
    </EmojiPickerContainer>
  );
};

export default EmojiPicker;
