import EmojiBadge from '../EmojiBadge/EmojiBadge';
import { TopReactionsContainer } from './TopReactionsStyle';

const TopReactions = ({ data }) => {
  return (
    <TopReactionsContainer>
      <EmojiBadge data={{ emoji: '😊', count: 16 }} />
      <EmojiBadge data={{ emoji: '😊', count: 16 }} />
      <EmojiBadge data={{ emoji: '😊', count: 16 }} />
    </TopReactionsContainer>
  );
};

export default TopReactions;
