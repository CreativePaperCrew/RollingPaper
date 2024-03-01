import React from 'react';
import EmojiPicker from '../../components/EmojiPicker/EmojiPicker';
import * as S from './ServiceHeaderStlyle';
import ShareButton from '../ShareButton/ShareButton';
import TopReactions from '../TopReactions/TopReactions';
import ReactionDropdown from '../ReactionDropdown/ReactionDropdown';

const ServiceHeader = () => {
  return (
    <>
      <S.HorizontalBar />
      <S.ServiceHeaderContainer>
        <S.NameArea>To. Ashley Kim</S.NameArea>
        <S.HorizontalBar $onlyMobile={true} />
        <S.OptionArea>
          <S.VerticalBar $margin="1.75rem" $onlyMobile={false} />
          <TopReactions />
          <ReactionDropdown />
          <EmojiPicker />
          <S.VerticalBar $margin="0.8125rem" $marginonlyMobile={false} />
          <S.VerticalBar $margin="0.9375rem;" $onlyMobile={true} />
          <ShareButton />
        </S.OptionArea>
      </S.ServiceHeaderContainer>
      <S.HorizontalBar />
    </>
  );
};

export default ServiceHeader;
