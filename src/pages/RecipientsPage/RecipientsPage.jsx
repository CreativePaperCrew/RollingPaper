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
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [deleteButtonText, setDeleteButtonText] = useState('삭제하기');
  const [showArrow, setShowArrow] = useState(true);
  const [messageCount, setMessageCount] = useState(0);

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

  const FETCHED_CARD_COUNT = messagesData?.results.length;
  const observedRef = useIntersectionObserver(
    getMoreCardData,
    {
      threshold: 0.5,
    },
    FETCHED_CARD_COUNT >= LIMIT,
  );

  const fetchData = async () => {
    const CHANGE_COUNT = messagesData?.count - LIMIT;
    if (CHANGE_COUNT <= offset) {
      setShowArrow(false);
      return;
    }
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

  useEffect(() => {
    if (recipientData) {
      setMessageCount(recipientData.messageCount);
    }
  }, [recipientData]);

  const onDelete = useCallback(
    async (id) => {
      await deleteRollingPaperMessage(id);
      setData((prevData) => prevData.filter((message) => message.id !== id));
      setMessageCount((prevCount) => prevCount - 1);
    },
    [setData],
  );

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
      <ServiceHeader
        recipientData={recipientData}
        messageCount={messageCount}
      />
      <S.EditContainer>
        <S.DeleteContainer>
          <S.DeleteButton size="small" onClick={toggleDelete}>
            {deleteButtonText}
          </S.DeleteButton>
        </S.DeleteContainer>
      </S.EditContainer>
      <S.RecipientsBackground
        $backgroundColor={backgroundColor}
        $backgroundImageURL={recipientData?.backgroundImageURL}
      >
        {showArrow && (
          <S.ArrowContainer>
            <S.ArrowDown />
          </S.ArrowContainer>
        )}
        <S.RecipientsCardsContainer>
          <AddPostCard />
          {data?.map((postCard) => (
            <PostCard
              onDelete={() => onDelete(postCard.id)}
              onClick={() => handleCardClick(postCard)}
              key={postCard.id}
              cardData={postCard}
              isDelete={isDelete}
            />
          ))}
          <S.TargetedLine ref={observedRef} />
        </S.RecipientsCardsContainer>
        {isOpen && (
          <CardModal cardData={selectedCardData} onClose={handleClose} />
        )}
      </S.RecipientsBackground>
    </>
  );
};

export default RecipientsPage;
