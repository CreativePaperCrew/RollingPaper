import useToggle from '../../hooks/useToggle';
import EmojiBadge from '../EmojiBadge/EmojiBadge';
import * as S from './ReactionDropdownStyle';
import ArrowDownSvg from '../../assets/icons/arrowDown.svg';

const ReactionDropdown = ({ reactions }) => {
  const { isOpen, toggleRef, handleToggle } = useToggle();

  return (
    <S.ArrowDownButton onClick={handleToggle} ref={toggleRef}>
      <S.ArrowDownImage src={ArrowDownSvg} alt="see more reactions" />
      {isOpen && (
        <S.EmojiBadgesExpanded>
          {reactions.map((reaction) => (
            <EmojiBadge
              key={reaction.id}
              data={{ emoji: reaction.emoji, count: reaction.count }}
            />
          ))}
        </S.EmojiBadgesExpanded>
      )}
    </S.ArrowDownButton>
  );
};

export default ReactionDropdown;
