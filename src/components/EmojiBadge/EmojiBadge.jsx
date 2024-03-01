import * as S from './EmojiBadgeStyle';

const EmojiBadge = ({ data }) => {
  return (
    <S.EmojiBadgeContainer>
      <S.EmojiContainer>{data.emoji}</S.EmojiContainer>
      <S.ReactionCount>{data.count}</S.ReactionCount>
    </S.EmojiBadgeContainer>
  );
};

export default EmojiBadge;
