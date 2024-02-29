import { useState } from 'react';
import EmojiBadge from '../EmojiBadge/EmojiBadge';
import {
  EmojiBadgesExpanded,
  ArrowDownButton,
  ArrowDownImage,
} from './ReactionDropdownStyle';
import ArrowDownSvg from '../../assets/icons/arrowDown.svg';

const ReactionDropdown = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ArrowDownButton onClick={() => setIsExpanded(!isExpanded)}>
      <ArrowDownImage src={ArrowDownSvg} alt="see more reactions" />
      {isExpanded && (
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
