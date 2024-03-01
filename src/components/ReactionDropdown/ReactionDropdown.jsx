import useToggle from '../../hooks/useToggle';
import EmojiBadge from '../EmojiBadge/EmojiBadge';
import * as S from './ReactionDropdownStyle';
import ArrowDownSvg from '../../assets/icons/arrowDown.svg';

const ReactionDropdown = ({ data }) => {
  const [isToggleOpen, changeToggle] = useToggle();

  return (
    <S.ArrowDownButton onClick={changeToggle}>
      <S.ArrowDownImage src={ArrowDownSvg} alt="see more reactions" />
      {isToggleOpen && (
        <S.EmojiBadgesExpanded>
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
        </S.EmojiBadgesExpanded>
      )}
    </S.ArrowDownButton>
  );
};

export default ReactionDropdown;
