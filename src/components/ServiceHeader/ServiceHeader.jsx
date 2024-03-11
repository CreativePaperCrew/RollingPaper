import React, { useEffect } from 'react';
import EmojiPicker from '../../components/EmojiPicker/EmojiPicker';
import * as S from './ServiceHeaderStyle';
import ShareButton from '../ShareButton/ShareButton';
import TopReactions from '../TopReactions/TopReactions';
import ReactionDropdown from '../ReactionDropdown/ReactionDropdown';
import WritersList from '../WritersList/WritersList';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import {
  getRecipientRollingPaperReactions,
  postRecipientRollingPaperReactions,
} from '../../apis/recipientRollingPaperApi';
import usePostData from '../../hooks/usePostData';

const ServiceHeader = ({ recipientData }) => {
  const { id } = useParams();
  const {
    data: reactionsData,
    error: reactionsError,
    refetch,
  } = useFetchData(getRecipientRollingPaperReactions, [id]);
  const { handlePost } = usePostData(postRecipientRollingPaperReactions, [id]);

  useEffect(() => {
    if (reactionsError) {
      alert('이모지 데이터를 불러오는데 실패하였습니다.');
    }
  }, [reactionsError]);

  const handleEmojiPick = async (emojiObject) => {
    try {
      await handlePost({ emoji: emojiObject.emoji, type: 'increase' });
      refetch();
    } catch (error) {
      alert('이모지 전송에 실패하였습니다.');
    }
  };

  const topReactions = reactionsData ? reactionsData.slice(0, 3) : [];
  const title = `To. ${recipientData?.name}`;
  return (
    recipientData && (
      <S.ServiceHeaderContainer>
        <S.HorizontalBar />
        <S.ServiceHeaderContent>
          <S.NameArea>{title}</S.NameArea>
          <S.HorizontalBar $onlyMobile={true} />
          <S.OptionArea>
            <WritersList
              messageCount={recipientData.messageCount}
              recentMessages={recipientData.recentMessages}
              $onlyDesktop={true}
            />
            <S.VerticalBar $margin="1.75rem" $onlyMobile={false} />
            <TopReactions topReactions={topReactions} />
            <ReactionDropdown reactions={reactionsData} />
            <EmojiPicker onEmojiPick={handleEmojiPick} />
            <S.VerticalBar $margin="0.8125rem" $onlyMobile={false} />
            <S.VerticalBar $margin="0.9375rem;" $onlyMobile={true} />
            <ShareButton
              recipientName={title}
              recipientsId={recipientData.id}
            />
          </S.OptionArea>
        </S.ServiceHeaderContent>
        <S.HorizontalBar />
      </S.ServiceHeaderContainer>
    )
  );
};

export default ServiceHeader;
