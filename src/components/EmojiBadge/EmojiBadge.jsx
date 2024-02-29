import {
  EmojiBadgeContainer,
  EmojiContainer,
  ReactionCount,
} from './EmojiBadgeStyle';

const EmojiBadge = ({ data }) => {
  return (
    <EmojiBadgeContainer>
      <EmojiContainer>{data.emoji}</EmojiContainer>
      <ReactionCount>{data.count}</ReactionCount>
    </EmojiBadgeContainer>
  );
};

export default EmojiBadge;
