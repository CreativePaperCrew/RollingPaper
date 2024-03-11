import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postRecipientRollingPaperMessage } from '../../apis/recipientRollingPaperApi';
import * as S from './PostWritingPageStyle';
import getProfileImages from '../../apis/getProfileImages';
import { FONTS } from '../../constants/fonts';
import { RELATIONSHIPS } from '../../constants/relationships';
import Button from '../../components/common/Buttons/Button/Button';
import Input from '../../components/Input/Input';
import SelectionDropdown from '../../components/SelectionDropdown/SelectionDropdown';
import TextEditor from '../../components/TextEditor/TextEditor';
import { useToastContext } from '../../contexts/ToastContext';

const PostWritingPage = () => {
  const { showToast } = useToastContext();
  const [senderName, setSenderName] = useState('');
  const [profileImageUrls, setProfileImageUrls] = useState([]);
  const [imageLoading, setImageLoading] = useState({});
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [contents, setContents] = useState('');
  const [selectedInfo, setSelectedInfo] = useState({
    relationship: '지인',
    font: 'Noto Sans',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const saveRecipient = (e) => {
    setSenderName(e.target.value);
  };

  const handleImageClick = (url) => {
    setSelectedImageUrl(url);
  };

  const handleImageLoading = (url) => {
    setImageLoading((prev) => ({ ...prev, [url]: false }));
  };

  const handleOptionClick = (type, option) => {
    setSelectedInfo((prev) => {
      return { ...prev, [type]: option };
    });
  };

  const handleContentOnchange = (content) => {
    setContents(content);
  };

  const handleCreateButtonClick = async (
    sender,
    profileImageURL,
    relationship,
    content,
    font,
  ) => {
    try {
      await postRecipientRollingPaperMessage(
        id,
        sender,
        profileImageURL,
        relationship,
        content,
        font,
      );
      showToast(true, `${sender}에 대한 롤링페이퍼를 생성하였습니다.`);
      navigate('/post/' + id);
    } catch (error) {
      showToast(false, error.message);
    }
  };

  useEffect(() => {
    getProfileImages()
      .then((res) => {
        setProfileImageUrls(res.imageUrls);
        setSelectedImageUrl(res.imageUrls[0]);
        res.imageUrls.forEach((url) => {
          setImageLoading((prev) => ({ ...prev, [url]: true }));
        });
      })
      .catch((error) => alert(error.message));
  }, []);

  return (
    <S.Container>
      <S.LeftAlignFrame>
        <S.SectionFrame>
          <S.Title>From.</S.Title>
          <Input
            saveValue={saveRecipient}
            value={senderName}
            placeholder="보내는 사람 이름을 입력해주세요"
          />
        </S.SectionFrame>
        <S.ProfileImage>
          <S.Title>프로필 이미지</S.Title>
          <S.ImageContainer>
            <S.SelectedImage src={selectedImageUrl} alt="basic-profile" />
            <S.ImageSelector>
              <S.ProfileMessage>프로필 이미지를 선택해주세요</S.ProfileMessage>
              <S.ImageList>
                {profileImageUrls?.map((url) => (
                  <S.EmptyBox key={url}>
                    <S.AvailableImage
                      src={url}
                      onClick={() => handleImageClick(url)}
                      onLoad={() => handleImageLoading(url)}
                      $loading={imageLoading[url] && 'none'}
                    />
                    {imageLoading[url] && <S.SkeletonImage />}
                  </S.EmptyBox>
                ))}
              </S.ImageList>
            </S.ImageSelector>
          </S.ImageContainer>
        </S.ProfileImage>
        <S.SectionFrame>
          <S.Title>상대와의 관계</S.Title>
          <SelectionDropdown
            selectList={RELATIONSHIPS}
            handleOptionClick={handleOptionClick}
            type="relationship"
          >
            {selectedInfo.relationship}
          </SelectionDropdown>
        </S.SectionFrame>
        <S.SectionFrame>
          <S.Title>내용을 입력해 주세요</S.Title>
          <TextEditor
            handleContentOnchange={handleContentOnchange}
            contents={contents}
          />
        </S.SectionFrame>
        <S.SectionFrame>
          <S.Title>폰트 선택</S.Title>
          <SelectionDropdown
            selectList={FONTS}
            handleOptionClick={handleOptionClick}
            type="font"
          >
            {selectedInfo.font}
          </SelectionDropdown>
        </S.SectionFrame>
        <S.MarginFrame>
          <Button
            isDisabled={!senderName || contents.length <= 1}
            handleButtonClick={() =>
              handleCreateButtonClick(
                senderName,
                selectedImageUrl,
                selectedInfo.relationship,
                contents,
                selectedInfo.font,
              )
            }
          >
            생성하기
          </Button>
        </S.MarginFrame>
      </S.LeftAlignFrame>
    </S.Container>
  );
};

export default PostWritingPage;
