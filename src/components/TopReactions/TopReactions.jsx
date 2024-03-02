import EmojiBadge from '../EmojiBadge/EmojiBadge';
import * as S from './TopReactionsStyle';

const TopReactions = ({ topReactions }) => {
  return (
    <S.TopReactionsContainer>
      {topReactions.map((data) => (
        <EmojiBadge key={data.id} data={data} />
      ))}
    </S.TopReactionsContainer>
  );
};

export default TopReactions;
