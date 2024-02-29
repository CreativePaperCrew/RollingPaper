import React from 'react';
import EmojiBadge from '../../../components/EmojiBadge/EmojiBadge';
import EmojiPicker from '../../../components/EmojiPicker/EmojiPicker';

const ServiceHeader = () => {
  return (
    <>
      <EmojiBadge data={{ emoji: '😊', count: 16 }} />
      <EmojiPicker />
    </>
  );
};

export default ServiceHeader;
