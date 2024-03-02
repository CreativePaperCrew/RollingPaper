import useToggle from '../../hooks/useToggle';
import Toast from '../common/Toast/Toast';
import shareIconSvg from '../../assets/icons/share.svg';
import * as S from './ShareButtonStyle';
import useToast from '../../hooks/useToast';

const ShareButton = () => {
  const {
    shouldRender,
    isShown,
    isSuccess,
    showToast,
    startHidingToast,
    message,
  } = useToast();
  const [isToggleOpen, changeToggle] = useToggle();

  const hostAddress = window.location.origin;
  const shareLink = `${hostAddress}/post/id`;

  const handleShareURLClick = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      showToast(true, 'URL이 클립보드에 복사되었습니다!');
    } catch (error) {
      showToast(false, 'URL 복사에 실패하였습니다.');
    }
  };

  return (
    <>
      <S.ShareButtonContainer onClick={changeToggle}>
        <S.ShareIcon src={shareIconSvg} alt="share icon" />
        {isToggleOpen && (
          <S.ShareDropdown>
            <S.ShareOption onClick={() => alert('카톡공유')}>
              카카오톡 공유
            </S.ShareOption>
            <S.ShareOption onClick={() => handleShareURLClick()}>
              URL 공유
            </S.ShareOption>
          </S.ShareDropdown>
        )}
      </S.ShareButtonContainer>
      {shouldRender && (
        <Toast
          shouldRender={shouldRender}
          isShown={isShown}
          isSuccess={isSuccess}
          message={message}
          startHidingToast={startHidingToast}
        />
      )}
    </>
  );
};

export default ShareButton;
