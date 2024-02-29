import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import { PostCardsContainer } from './PostPageStyle';
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader';

const dummyData = [
  {
    id: 0,
    profileImg:
      'https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-faceless-user-anonymous-unknown-icon-png-image_4816463.png',
    author: 'authorauthorauthorauthor',
    relationship: '동료',
    message:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
    date: '2024.02.27',
  },
  {
    id: 1,
    profileImg:
      'https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-faceless-user-anonymous-unknown-icon-png-image_4816463.png',
    author: '고구마',
    relationship: '친구',
    message:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
    date: '2024.02.27',
  },
  {
    id: 2,
    profileImg:
      'https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-faceless-user-anonymous-unknown-icon-png-image_4816463.png',
    author: '감자',
    relationship: '가족',
    message:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
    date: '2024.02.27',
  },
  {
    id: 3,
    profileImg:
      'https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-faceless-user-anonymous-unknown-icon-png-image_4816463.png',
    author: '양파',
    relationship: '지인',
    message:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
    date: '2024.02.27',
  },
];

const PostPage = () => {
  return (
    <>
      <ServiceHeader />
      <PostCardsContainer>
        {dummyData.map((postCard) => (
          <PostCard key={postCard.id} cardData={postCard} />
        ))}
      </PostCardsContainer>
    </>
  );
};

export default PostPage;
