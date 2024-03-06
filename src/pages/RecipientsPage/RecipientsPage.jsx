import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getRecipientRollingPapers,
  getRecipientRollingPaperMessages,
} from '../../apis/recipientRollingPaperApi';
import useFetchData from '../../hooks/useFetchData';
import * as S from './RecipientsPageStyle';
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader';
import PostCard from '../../components/PostCard/PostCard';
import { COLORS } from '../../constants/colors';
import AddPostCard from '../../components/PostCard/AddPostCard';
import useToggle from '../../hooks/useToggle';
import CardModal from '../../components/CardModal/CardModal';

const RecipientsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOpen, toggleIsOpen] = useToggle();
  const [selectedCardData, setSelectedCardData] = useState(null);
  const {
    data: recipientData,
    isLoading: isLoadingRecipient,
    error: recipientError,
  } = useFetchData(getRecipientRollingPapers, [id]);

  const {
    data: messagesData,
    isLoading: isLoadingMessages,
    error: messagesError,
  } = useFetchData(getRecipientRollingPaperMessages, [id]);

  useEffect(() => {
    if (messagesError || recipientError) {
      navigate('/');
    }
  }, [messagesError, recipientError, navigate]);

  if (isLoadingMessages || isLoadingRecipient) {
    return <div>데이터 로딩 중...</div>;
  }

  const backgroundColor = recipientData
    ? COLORS[recipientData.backgroundColor]
    : '';
  const rollingPapers = messagesData ? messagesData.results : [];

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
        {rollingPapers.map((postCard) => (
          <PostCard
            onClick={() => handleCardClick(postCard)}
            key={postCard.id}
            cardData={postCard}
          />
        ))}
        {isOpen && (
          <CardModal cardData={selectedCardData} onClose={toggleIsOpen} />
        )}
      </S.RecipientsCardsContainer>
    </>
  );
};

export default RecipientsPage;
