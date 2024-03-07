/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getRecipientRollingPapers,
  getRecipientRollingPaperMessages,
  deleteRollingPaperMessage,
} from '../../apis/recipientRollingPaperApi';
import useFetchData from '../../hooks/useFetchData';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useToggle from '../../hooks/useToggle';
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader';
import PostCard from '../../components/PostCard/PostCard';
import AddPostCard from '../../components/PostCard/AddPostCard';
import CardModal from '../../components/CardModal/CardModal';
import * as S from './RecipientsPageStyle';
import { COLORS } from '../../constants/colors';

const RecipientsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOpen, toggleIsOpen] = useToggle();
  const [selectedCardData, setSelectedCardData] = useState(null);
  const LIMIT = 8;
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(null);
  const [data, setData] = useState([]);

  const { data: recipientData, error: recipientError } = useFetchData(
    getRecipientRollingPapers,
    [id],
  );

  const { data: messagesData, isLoading: messageLoading } = useFetchData(
    getRecipientRollingPaperMessages,
    [id, LIMIT, offset],
  );

  const getMoreCardData = () => {
    if (!messageLoading) {
      setOffset((prevOffset) => prevOffset + LIMIT);
    }
  };

  const observedRef = useIntersectionObserver(
    getMoreCardData,
    { threshold: 0.5 },
    messagesData?.results.length >= LIMIT,
  );

  const fetchData = async () => {
    if (offset >= count) {
      return;
    }
    setCount(messagesData.count);
  };

  useEffect(() => {
    if (messagesData) {
      setData((prevData) => [...prevData, ...messagesData.results]);
    }
  }, [messagesData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (recipientError) {
      navigate('/');
    }
  }, [recipientError, navigate]);

  const onDelete = useCallback(
    async (id) => {
      await deleteRollingPaperMessage(id);
      setData((prevData) => prevData.filter((message) => message.id !== id));
    },
    [setData],
  );

  const backgroundColor = recipientData
    ? COLORS[recipientData.backgroundColor]
    : '';

  const handleCardClick = (cardData) => {
    setSelectedCardData(cardData);
    toggleIsOpen();
  };

  return (
    <>
      <ServiceHeader recipientData={recipientData} />
      <S.RecipientsCardsContainer
        $backgroundColor={backgroundColor}
        $backgroundImageURL={recipientData?.backgroundImageURL}
      >
        <AddPostCard />
        {data?.map((postCard) => (
          <PostCard
            onDelete={() => onDelete(postCard.id)}
            onClick={() => handleCardClick(postCard)}
            key={postCard.id}
            cardData={postCard}
          />
        ))}
        <S.TargetedLine ref={observedRef} />
        {isOpen && (
          <CardModal cardData={selectedCardData} onClose={toggleIsOpen} />
        )}
      </S.RecipientsCardsContainer>
    </>
  );
};

export default RecipientsPage;
