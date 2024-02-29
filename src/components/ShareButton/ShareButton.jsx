import useToggle from '../../hooks/useToggle';
import shareIconSvg from '../../assets/icons/share.svg';
import {
  ShareButtonContainer,
  ShareDropdown,
  ShareIcon,
  ShareOption,
} from './ShareButtonStyle';
const ShareButton = () => {
  const [isToggleOpen, changeToggle] = useToggle();
  return (
    <ShareButtonContainer onClick={changeToggle}>
      <ShareIcon src={shareIconSvg} alt="share icon" />
      {isToggleOpen && (
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
