/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getRecipientRollingPapers,
  getRecipientRollingPaperMessages,
} from '../../apis/recipientRollingPaperApi';
import useFetchData from '../../hooks/useFetchData';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { COLORS } from '../../constants/colors';
import * as S from './RecipientsPageStyle';
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader';
import AddPostCard from '../../components/PostCard/AddPostCard';
import PostCard from '../../components/PostCard/PostCard';

const RecipientsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cardData, setCardData] = useState([]);

  const { data: recipientData, error: recipientError } = useFetchData(
    getRecipientRollingPapers,
    [id],
  );

  const getMoreCardData = () => {
    if (!isLoading && (count == null || offset < count)) {
      setOffset((prevOffset) => prevOffset + 8);
    }
  };

  const observedRef = useIntersectionObserver(
    getMoreCardData,
    { threshold: 0.5 },
    cardData.length >= 8,
  );

  const fetchData = async () => {
    if (offset >= count && count !== null) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await getRecipientRollingPaperMessages(id, 8, offset);
      const newData = response.results;
      setCount(response.count);
      setCardData((prevData) => [...prevData, ...newData]);
    } catch (error) {
      alert('에러');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  useEffect(() => {
    if (recipientError) {
      navigate('/');
    }
  }, [recipientError, navigate]);

  const backgroundColor = recipientData
    ? COLORS[recipientData.backgroundColor]
    : '';

  return (
    <>
      <ServiceHeader recipientData={recipientData} />
      <S.RecipientsCardsContainer
        $backgroundColor={backgroundColor}
        $backgroundImageURL={recipientData?.backgroundImageURL}
      >
        <AddPostCard />
        {cardData?.map((postCard) => (
          <PostCard key={postCard.id} cardData={postCard} />
        ))}
        <S.TargetedLine ref={observedRef} />
      </S.RecipientsCardsContainer>
    </>
  );
};

export default RecipientsPage;
