import useToggle from '../../hooks/useToggle';
import EmojiBadge from '../EmojiBadge/EmojiBadge';
import {
  EmojiBadgesExpanded,
  ArrowDownButton,
  ArrowDownImage,
} from './ReactionDropdownStyle';
import ArrowDownSvg from '../../assets/icons/arrowDown.svg';

const ReactionDropdown = ({ data }) => {
  const [isToggleOpen, changeToggle] = useToggle();

  return (
    <ArrowDownButton onClick={changeToggle}>
      <ArrowDownImage src={ArrowDownSvg} alt="see more reactions" />
      {isToggleOpen && (
        <EmojiBadgesExpanded>
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
          <EmojiBadge data={{ emoji: '😊', count: 16 }} />
        </EmojiBadgesExpanded>
      )}
    </ArrowDownButton>
  );
};

export default ReactionDropdown;
