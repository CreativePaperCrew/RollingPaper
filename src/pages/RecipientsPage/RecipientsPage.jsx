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
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader';
import PostCard from '../../components/PostCard/PostCard';
import AddPostCard from '../../components/PostCard/AddPostCard';
import CardModal from '../../components/CardModal/CardModal';
import * as S from './RecipientsPageStyle';
import { COLORS } from '../../constants/colors';
import useToggle from '../../hooks/useToggle';

const RecipientsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isOpen, handleOpen, handleClose } = useToggle();
  const [selectedCardData, setSelectedCardData] = useState(null);
  const LIMIT = 8;
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(null);
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [deleteButtonText, setDeleteButtonText] = useState('삭제하기');

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

  const handleDelete = useCallback(
    async (id) => {
      await deleteRollingPaperMessage(id);
      setData((prevData) => prevData.filter((message) => message.id !== id));
    },
    [setData],
  );

  const handleEdit = (postid) => {
    navigate(`/post/${recipientData.id}/message/${postid}`);
  };

  const toggleDelete = () => {
    setIsDelete(!isDelete);
    setDeleteButtonText(isDelete ? '삭제하기' : '저장하기');
  };

  const backgroundColor = recipientData
    ? COLORS[recipientData.backgroundColor]
    : '';

  const handleCardClick = (cardData) => {
    setSelectedCardData(cardData);
    handleOpen(true);
  };

  return (
    <>
      <ServiceHeader recipientData={recipientData} />
      <S.EditContainer onClick={toggleDelete}>
        <S.DeleteContainer>
          <S.DeleteButton size="medium">{deleteButtonText}</S.DeleteButton>
        </S.DeleteContainer>
      </S.EditContainer>
      <S.RecipientsCardsContainer
        $backgroundColor={backgroundColor}
        $backgroundImageURL={recipientData?.backgroundImageURL}
      >
        <AddPostCard />
        {data?.map((postCard) => (
          <PostCard
            onEdit={() => handleEdit(postCard.id)}
            onDelete={() => handleDelete(postCard.id)}
            onClick={() => handleCardClick(postCard)}
            key={postCard.id}
            cardData={postCard}
            isDelete={isDelete}
          />
        ))}
        <S.TargetedLine ref={observedRef} />
        {isOpen && (
          <CardModal cardData={selectedCardData} onClose={handleClose} />
        )}
      </S.RecipientsCardsContainer>
    </>
  );
};

export default RecipientsPage;
