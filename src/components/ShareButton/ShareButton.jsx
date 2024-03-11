import useToggle from '../../hooks/useToggle';
import shareIconSvg from '../../assets/icons/share.svg';
import * as S from './ShareButtonStyle';
import { useEffect } from 'react';
import { useToastContext } from '../../contexts/ToastContext';

const ShareButton = ({ recipientsId }) => {
  const { showToast } = useToastContext();
  const KAKAOJSKEY = process.env.REACT_APP_KAKAOJSKEY;
  const { isOpen, toggleRef, handleToggle, handleClose } = useToggle();

  const hostAddress = window.location.origin;
  const shareLink = `${hostAddress}/post/${recipientsId}`;

  const handleShareURLClick = async () => {
    handleClose();
    try {
      await navigator.clipboard.writeText(shareLink);
      showToast(true, 'URL이 복사 되었습니다!');
    } catch (error) {
      showToast(false, 'URL 복사에 실패하였습니다.');
    }
  };

  const handleShareKakaoClick = () => {
    handleClose();
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
    <S.ShareButtonContainer onClick={handleToggle} ref={toggleRef}>
      <S.ShareIcon src={shareIconSvg} alt="share icon" />
      {isOpen && (
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
  );
};

export default ShareButton;
