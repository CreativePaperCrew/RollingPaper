import EmojiBadge from '../EmojiBadge/EmojiBadge';
import { TopReactionsContainer } from './TopReactionsStyle';

const TopReactions = ({ topReactions }) => {
  return (
    <TopReactionsContainer>
      {topReactions.map((data) => (
        <EmojiBadge key={data.id} data={data} />
      ))}
    </TopReactionsContainer>
  );
};

export default TopReactions;
