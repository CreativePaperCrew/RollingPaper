import React from 'react';
import Badge from '../Badge/Badge';
import * as S from './PostCardStyle';
import deleteImg from '../../assets/icons/deleted.svg';
import { formatKSTDate } from '../../utils/formatKSTDate';

const PostCard = ({ cardData, onClick }) => {
  const { content, createdAt, font, profileImageURL, relationship, sender } =
    cardData;

  return (
    <S.PostCardContainer onClick={onClick}>
      <S.PostCardTop>
        <S.PostCardProfile>
          <S.DeleteContainer>
            <S.DeleteButton src={deleteImg} alt="카드를 삭제하는 버튼" />
          </S.DeleteContainer>
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
        <S.Content $font={font}>{content}</S.Content>
      </S.ContentContainer>
      <S.PostCardDate>{formatKSTDate(createdAt)}</S.PostCardDate>
    </S.PostCardContainer>
  );
};

export default PostCard;
