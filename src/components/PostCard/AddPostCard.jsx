import React from 'react';
import * as S from './PostCardStyle';
import { useNavigate, useParams } from 'react-router-dom';

import AddButton from '../common/Buttons/AddButton/AddButton';

const AddPostCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleAddButtonClick = () => {
    navigate(`/post/${id}/message`);
  };
  return (
    <S.PostCardContainer onClick={handleAddButtonClick}>
      <AddButton />
    </S.PostCardContainer>
  );
};

export default AddPostCard;
