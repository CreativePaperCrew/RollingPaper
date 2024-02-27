import React from 'react';
import {
  PostCardContainer,
  PostCardTop,
  PostCardProfile,
  DeleteContainer,
  DeleteButton,
  ProfileImgContainer,
  ProfileImg,
  AuthorContainer,
  AuthorTitle,
  AuthorFrom,
  Author,
  ContentContainer,
  Content,
  PostCardDate,
} from './PostCardStyle';
import DeleteImg from '../../assets/images/deleted.svg';

const PostCard = ({ cardData }) => {
  const { author, profileImg, relationship, message, date } = cardData;

  return (
    <PostCardContainer>
      <PostCardTop>
        <PostCardProfile>
          <DeleteContainer>
            <DeleteButton src={DeleteImg} alt="카드를 삭제하는 버튼" />
          </DeleteContainer>
          <ProfileImgContainer>
            <ProfileImg src={profileImg} />
          </ProfileImgContainer>
          <AuthorContainer>
            <AuthorTitle>
              <AuthorFrom>From.</AuthorFrom>
              <Author>{author}</Author>
            </AuthorTitle>
            <div>{relationship}</div>
          </AuthorContainer>
        </PostCardProfile>
      </PostCardTop>
      <ContentContainer>
        <Content>{message}</Content>
      </ContentContainer>
      <PostCardDate>{date}</PostCardDate>
    </PostCardContainer>
  );
};

export default PostCard;
