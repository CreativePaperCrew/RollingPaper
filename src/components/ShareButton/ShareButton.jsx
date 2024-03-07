import useToggle from '../../hooks/useToggle';
import Toast from '../common/Toast/Toast';
import shareIconSvg from '../../assets/icons/share.svg';
import * as S from './ShareButtonStyle';
import useToast from '../../hooks/useToast';
import { useEffect } from 'react';

const ShareButton = ({ recipientsId }) => {
  const KAKAOJSKEY = process.env.REACT_APP_KAKAOJSKEY;
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
  const shareLink = `${hostAddress}/post/${recipientsId}`;

  const handleShareURLClick = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      showToast(true, 'URL이 복사 되었습니다!');
    } catch (error) {
      showToast(false, 'URL 복사에 실패하였습니다.');
    }
  };

  const handleShareKakaoClick = () => {
    if (window.Kakao === undefined) {
      return;
    }
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(KAKAOJSKEY);
    }
    kakao.Share.sendDefault({
      objectType: 'text',
      text: 'title',
      link: {
        mobileWebUrl: shareLink,
        webUrl: shareLink,
      },
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <S.ShareButtonContainer onClick={changeToggle}>
        <S.ShareIcon src={shareIconSvg} alt="share icon" />
        {isToggleOpen && (
          <S.ShareDropdown>
            <S.ShareOption onClick={() => handleShareKakaoClick()}>
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
