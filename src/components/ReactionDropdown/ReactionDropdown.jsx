import useToggle from '../../hooks/useToggle';
import EmojiBadge from '../EmojiBadge/EmojiBadge';
import * as S from './ReactionDropdownStyle';
import ArrowDownSvg from '../../assets/icons/arrowDown.svg';
import { useEffect } from 'react';
import { getRecipientRollingPaperReactions } from '../../apis/recipientRollingPaperApi';
import useFetchData from '../../hooks/useFetchData';
import { useParams } from 'react-router-dom';

const ReactionDropdown = () => {
  const { id } = useParams();
  const [isToggleOpen, changeToggle] = useToggle();
  const {
    data: reactionsData,
    isLoading: isLoadingReactions,
    error: reactionsError,
  } = useFetchData(getRecipientRollingPaperReactions, [id]);

  useEffect(() => {
    if (reactionsError) {
      alert('fail to load reactions');
    }
  }, [reactionsError]);

  const reactions = reactionsData ? reactionsData.slice(0, 8) : [];

  return (
    <S.ArrowDownButton onClick={changeToggle}>
      <S.ArrowDownImage src={ArrowDownSvg} alt="see more reactions" />
      {isToggleOpen && (
        <S.EmojiBadgesExpanded>
          {reactions.map((reaction, i) => (
            <EmojiBadge
              key={i}
              data={{ emoji: reaction.emoji, count: reaction.count }}
            />
          ))}
        </S.EmojiBadgesExpanded>
      )}
    </S.ArrowDownButton>
  );
};

export default ReactionDropdown;
