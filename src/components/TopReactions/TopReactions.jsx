import EmojiBadge from '../EmojiBadge/EmojiBadge';
import * as S from './TopReactionsStyle';

const TopReactions = ({ data }) => {
  return (
    <S.TopReactionsContainer>
      <EmojiBadge data={{ emoji: '😊', count: 16 }} />
      <EmojiBadge data={{ emoji: '😊', count: 16 }} />
      <EmojiBadge data={{ emoji: '😊', count: 16 }} />
    </S.TopReactionsContainer>
  );
};

export default TopReactions;
