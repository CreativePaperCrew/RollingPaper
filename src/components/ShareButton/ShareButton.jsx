import useToggle from '../../hooks/useToggle';
import Toast from '../common/Toast/Toast';
import shareIconSvg from '../../assets/icons/share.svg';
import {
  ShareButtonContainer,
  ShareDropdown,
  ShareIcon,
  ShareOption,
} from './ShareButtonStyle';
import useToast from '../../hooks/useToast';

const ShareButton = () => {
  const {
    showToast,
    isShow,
    isShouldRender,
    isSuccess,
    message,
    startHidingToast,
  } = useToast();
  const [isToggleOpen, changeToggle] = useToggle();

  const hostAddress = window.location.origin;
  const shareLink = `${hostAddress}/post/id`;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      showToast(true, 'URL이 클립보드에 복사되었습니다!');
    } catch (error) {
      showToast(false, 'URL 복사에 실패하였습니다.');
    }
  };

  return (
    <ShareButtonContainer onClick={changeToggle}>
      <ShareIcon src={shareIconSvg} alt="share icon" />
      {isToggleOpen && (
        <ShareDropdown>
          <ShareOption onClick={() => alert('카톡공유')}>
            카카오톡 공유
          </ShareOption>
          <ShareOption onClick={() => handleShare()}>URL 공유</ShareOption>
        </ShareDropdown>
      )}
      {isShouldRender && (
        <Toast
          isSuccess={isSuccess}
          message={message}
          isShow={isShow}
          isShouldRender={isShouldRender}
          startHidingToast={startHidingToast}
        />
      )}
    </ShareButtonContainer>
  );
};

export default ShareButton;
