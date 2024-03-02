import React from 'react';

import useToggle from '../../hooks/useToggle';
import Picker from 'emoji-picker-react';
import * as S from './EmojiPickerStyle';

import emojiPickerImage from '../../assets/icons/emojiPicker.svg';

const EmojiPicker = () => {
  const [isToggleOpen, changeToggle] = useToggle();
  const handleEmojiPick = (emojiObject) => {
    alert(emojiObject.emoji + emojiObject.names.join(', '));
    changeToggle();
  };

  return (
    <S.EmojiPickerContainer>
      <S.EmojiPickerButton onClick={changeToggle}>
        <S.EmojiPickerButtonIcon
          src={emojiPickerImage}
          alt="smiling face icon to add emoji"
        />
        <S.EmojiPickerButtonText>추가</S.EmojiPickerButtonText>
      </S.EmojiPickerButton>

      <Picker
        emojiStyle="native"
        open={isToggleOpen}
        width={300}
        height={400}
        onEmojiClick={handleEmojiPick}
      />
    </S.EmojiPickerContainer>
  );
};

export default EmojiPicker;
