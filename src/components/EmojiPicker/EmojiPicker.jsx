import React from 'react';
import useToggle from '../../hooks/useToggle';
import Picker from 'emoji-picker-react';
import * as S from './EmojiPickerStyle';
import emojiPickerImage from '../../assets/icons/emojiPicker.svg';

const EmojiPicker = ({ onEmojiPick }) => {
  const { isOpen, toggleRef, handleToggle, handleClose } = useToggle();

  const handleEmojiSelect = (emojiObject) => {
    onEmojiPick(emojiObject);
    handleClose();
  };

  return (
    <S.EmojiPickerContainer ref={toggleRef}>
      <S.EmojiPickerButton onClick={handleToggle}>
        <S.EmojiPickerButtonIcon
          src={emojiPickerImage}
          alt="smiling face icon to add emoji"
        />
        <S.EmojiPickerButtonText>추가</S.EmojiPickerButtonText>
      </S.EmojiPickerButton>

      <Picker
        emojiStyle="native"
        open={isOpen}
        width={300}
        height={400}
        onEmojiClick={handleEmojiSelect}
      />
    </S.EmojiPickerContainer>
  );
};

export default EmojiPicker;
