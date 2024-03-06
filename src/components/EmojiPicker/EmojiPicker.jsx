import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useToggle from '../../hooks/useToggle';
import usePostData from '../../hooks/usePostData';
import { postRecipientRollingPaperReactions } from '../../apis/recipientRollingPaperApi';
import Picker from 'emoji-picker-react';
import * as S from './EmojiPickerStyle';

import emojiPickerImage from '../../assets/icons/emojiPicker.svg';

const EmojiPicker = () => {
  const { id } = useParams();
  const [isToggleOpen, changeToggle] = useToggle();
  const { handlePost, res } = usePostData(postRecipientRollingPaperReactions, [
    id,
  ]);
  const handleEmojiPick = async (emojiObject) => {
    changeToggle();
    await handlePost({ emoji: emojiObject.emoji, type: 'increase' });
  };
  useEffect(() => {
    if (res) {
      window.location.reload();
    }
  }, [res]);
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
