/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getRecipientRollingPapers,
  getRecipientRollingPaperMessages,
} from '../../apis/recipientRollingPaperApi';
import useFetchData from '../../hooks/useFetchData';
import { COLORS } from '../../constants/colors';
import * as S from './RecipientsPageStyle';
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader';
import AddPostCard from '../../components/PostCard/AddPostCard';
import PostCard from '../../components/PostCard/PostCard';

const RecipientsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const observerRef = useRef(null);
  const targetRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState([]);

  const { data: recipientData, error: recipientError } = useFetchData(
    getRecipientRollingPapers,
    [id],
  );

  const handleObserver = (entries) => {
    const target = entries[0];
    if (
      target.isIntersecting &&
      !isLoading &&
      (count == null || offset < count)
    ) {
      setOffset((prevOffset) => prevOffset + 8);
    }
  };

  useEffect(() => {
    if (message.length > 7) {
      observerRef.current = new IntersectionObserver(handleObserver, {
        threshold: 0.5,
      });

      if (targetRef.current) {
        observerRef.current.observe(targetRef.current);
      }

      return () => observerRef.current?.disconnect();
    }
  }, [message]);

  const fetchData = async () => {
    if (offset >= count && count !== null) {
      observerRef.current.disconnect();
      return;
    }

    setIsLoading(true);
    try {
      const response = await getRecipientRollingPaperMessages(id, 8, offset);
      const newData = response.results;
      setCount(response.count);
      setMessage((prevData) => [...prevData, ...newData]);
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
        {message?.map((postCard) => (
          <PostCard key={postCard.id} cardData={postCard} />
        ))}
        <div ref={targetRef} style={{ height: '10px' }} />
      </S.RecipientsCardsContainer>
    </>
  );
};

export default RecipientsPage;
