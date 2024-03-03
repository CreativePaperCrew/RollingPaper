import React from 'react';
import EmojiPicker from '../../components/EmojiPicker/EmojiPicker';
import * as S from './ServiceHeaderStyle';
import ShareButton from '../ShareButton/ShareButton';
import TopReactions from '../TopReactions/TopReactions';
import ReactionDropdown from '../ReactionDropdown/ReactionDropdown';
import WritersList from '../WritersList/WritersList';

const ServiceHeader = ({ recipientData }) => {
  return (
    recipientData && (
      <>
        <S.HorizontalBar />
        <S.ServiceHeaderContainer>
          <S.NameArea>To. {recipientData.name}</S.NameArea>
          <S.HorizontalBar $onlyMobile={true} />
          <S.OptionArea>
            <WritersList
              messageCount={recipientData.messageCount}
              recentMessages={recipientData.recentMessages}
            />
            <S.VerticalBar $margin="1.75rem" $onlyMobile={false} />
            <TopReactions topReactions={recipientData.topReactions} />
            <ReactionDropdown />
            <EmojiPicker />
            <S.VerticalBar $margin="0.8125rem" $onlyMobile={false} />
            <S.VerticalBar $margin="0.9375rem;" $onlyMobile={true} />
            <ShareButton recipientsId={recipientData.id} />
          </S.OptionArea>
        </S.ServiceHeaderContainer>
        <S.HorizontalBar />
      </>
    )
  );
};

export default ServiceHeader;
