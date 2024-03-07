import React from 'react';
import Badge from '../Badge/Badge';
import * as S from './PostCardStyle';
import deleteImg from '../../assets/icons/deleted.svg';
import { formatKSTDate } from '../../utils/formatKSTDate';
import InnerHtml from '../InnerHtml/InnerHtml';

const PostCard = ({ cardData, onClick, onDelete, isDelete }) => {
  const {
    id,
    content,
    createdAt,
    font,
    profileImageURL,
    relationship,
    sender,
  } = cardData;

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <S.PostCardContainer onClick={onClick}>
      <S.PostCardTop>
        <S.PostCardProfile>
          {isDelete && (
            <S.DeleteContainer onClick={handleDelete}>
              <S.DeleteButton src={deleteImg} alt="카드를 삭제하는 버튼" />
            </S.DeleteContainer>
          )}
          <S.ProfileImg $profileImageURL={profileImageURL} />
          <S.AuthorContainer>
            <S.AuthorTitle>
              <S.AuthorFrom>From.</S.AuthorFrom>
              <S.Author>{sender}</S.Author>
            </S.AuthorTitle>
            <Badge relationship={relationship} />
          </S.AuthorContainer>
        </S.PostCardProfile>
      </S.PostCardTop>
      <S.ContentContainer>
        <InnerHtml content={content} font={font} />
      </S.ContentContainer>
      <S.PostCardDate>{formatKSTDate(createdAt)}</S.PostCardDate>
    </S.PostCardContainer>
  );
};

export default PostCard;
