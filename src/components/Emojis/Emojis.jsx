import React from 'react';

import { useState } from 'react';
import Picker from 'emoji-picker-react';
import './styles.css';
const Emojis = () => {
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  return (
    <>
      {/* <div>{chosenEmoji?.names.join(', ')}</div> */}
      <div>{chosenEmoji?.emoji}</div>
      <button onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}>
        {isEmojiPickerOpen ? '닫기' : '열기'}
      </button>
      <Picker
        open={isEmojiPickerOpen}
        width={300}
        height={400}
        onEmojiClick={(emojiObject) => {
          setChosenEmoji(emojiObject);
          setIsEmojiPickerOpen(false);
        }}
      />
    </>
  );
};

export default Emojis;
