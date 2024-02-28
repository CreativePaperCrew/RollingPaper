import React from 'react';
import * as S from './PostCardStyle';
import AddButton from '../common/Button/AddButton';

const AddPostCard = () => {
  return (
    <S.PostCardContainer>
      <AddButton />
    </S.PostCardContainer>
  );
};

export default AddPostCard;
