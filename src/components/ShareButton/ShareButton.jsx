import { useState } from 'react';
import shareIconSvg from '../../assets/icons/share.svg';
import {
  ShareButtonContainer,
  ShareDropdown,
  ShareIcon,
  ShareOption,
} from './ShareButtonStyle';
const ShareButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <ShareButtonContainer onClick={() => setIsExpanded(!isExpanded)}>
      <ShareIcon src={shareIconSvg} alt="share icon" />
      {isExpanded && (
        <ShareDropdown>
          <ShareOption onClick={() => alert('카톡공유')}>
            카카오톡 공유
          </ShareOption>
          <ShareOption onClick={() => alert('링크공유')}>URL 공유</ShareOption>
        </ShareDropdown>
      )}
    </ShareButtonContainer>
  );
};

export default ShareButton;
