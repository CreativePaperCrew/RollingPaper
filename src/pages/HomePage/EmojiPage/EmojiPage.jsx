import React from 'react';
import EmojiBadge from '../../../components/EmojiBadge/EmojiBadge';
import EmojiPicker from '../../../components/EmojiPicker/EmojiPicker';

const EmojiPage = () => {
  return (
    <>
      <div>테스트용 이모지 페이지입니다</div>
      <EmojiBadge data={{ emoji: '😊', count: 16 }} />
      <EmojiPicker />
    </>
  );
};

export default EmojiPage;
