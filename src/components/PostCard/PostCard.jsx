import React from 'react';
import * as S from './PostCardStyle';
import deleteImg from '../../assets/icons/deleted.svg';

const PostCard = ({ cardData }) => {
  const { author, profileImg, relationship, message, date } = cardData;

  return (
    <S.PostCardContainer>
      <S.PostCardTop>
        <S.PostCardProfile>
          <S.DeleteContainer>
            <S.DeleteButton src={deleteImg} alt="카드를 삭제하는 버튼" />
          </S.DeleteContainer>
          <S.ProfileImgContainer>
            <S.ProfileImg src={profileImg} />
          </S.ProfileImgContainer>
          <S.AuthorContainer>
            <S.AuthorTitle>
              <S.AuthorFrom>From.</S.AuthorFrom>
              <S.Author>{author}</S.Author>
            </S.AuthorTitle>
            <div>{relationship}</div>
          </S.AuthorContainer>
        </S.PostCardProfile>
      </S.PostCardTop>
      <S.ContentContainer>
        <S.Content>{message}</S.Content>
      </S.ContentContainer>
      <S.PostCardDate>{date}</S.PostCardDate>
    </S.PostCardContainer>
  );
};

export default PostCard;
