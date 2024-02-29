import React from 'react';
import EmojiPicker from '../../components/EmojiPicker/EmojiPicker';
import {
  ServiceHeaderContainer,
  VerticalBar,
  NameArea,
  OptionArea,
  HorizontalBar,
} from './ServiceHeaderStlyle';
import ShareButton from '../ShareButton/ShareButton';
import TopReactions from '../TopReactions/TopReactions';
import ReactionDropdown from '../ReactionDropdown/ReactionDropdown';

const ServiceHeader = () => {
  return (
    <>
      <HorizontalBar />
      <ServiceHeaderContainer>
        <NameArea>To. Ashley Kim</NameArea>
        <HorizontalBar onlyMobile={true} />
        <OptionArea>
          <VerticalBar margin="1.75rem" onlyMobile={false} />
          <TopReactions />
          <ReactionDropdown />
          <EmojiPicker />
          <VerticalBar margin="0.8125rem" onlyMobile={false} />
          <VerticalBar margin="0.9375rem;" onlyMobile={true} />
          <ShareButton />
        </OptionArea>
      </ServiceHeaderContainer>
      <HorizontalBar />
    </>
  );
};

export default ServiceHeader;
