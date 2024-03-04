import Input from '../../components/Input/Input';
import * as S from './PostWritingPageStyle';
import SelectionDropdown from '../../components/SelectionDropdown/SelectionDropdown';
import { useEffect, useState } from 'react';
import getProfileImages from '../../apis/getProfileImages';
import TextEditor from '../../components/TextEditor/TextEditor';
import { RELATIONSHIPS } from '../../constants/relationships';
import { FONTS } from '../../constants/fonts';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Buttons/Button/Button';

const PostWritingPage = () => {
  const [senderName, setSenderName] = useState('');
  const [profileImageUrls, setProfileImageUrls] = useState([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const saveRecipient = (e) => {
    setSenderName(e.target.value);
  };

  const handleImageClick = (url) => {
    setSelectedImageUrl(url);
  };

  useEffect(() => {
    getProfileImages()
      .then((res) => {
        setProfileImageUrls(res.imageUrls);
        setSelectedImageUrl(res.imageUrls[0]);
      })
      .catch((error) => alert(error.message));
  }, []);

  return (
    <S.Container>
      <S.LeftAlignFrame>
        <S.SectionFrame>
          <S.Title>From.</S.Title>
          <Input
            width="long"
            saveRecipient={saveRecipient}
            recipient={senderName}
          >
            보내는 사람 이름을 입력해주세요
          </Input>
        </S.SectionFrame>
        <S.ProfileImage>
          <S.Title>프로필 이미지</S.Title>
          <S.ImageContainer>
            <S.SelectedImage src={selectedImageUrl} alt="basic-profile" />
            <S.ImageSelector>
              <S.ProfileMessage>프로필 이미지를 선택해주세요</S.ProfileMessage>
              <S.ImageList>
                {profileImageUrls.map((url) => (
                  <S.AvaliableImages
                    src={url}
                    key={url}
                    onClick={() => handleImageClick(url)}
                  />
                ))}
              </S.ImageList>
            </S.ImageSelector>
          </S.ImageContainer>
        </S.ProfileImage>
        <S.SectionFrame>
          <S.Title>상대와의 관계</S.Title>
          <SelectionDropdown selectList={RELATIONSHIPS} defaultValue="지인" />
        </S.SectionFrame>
        <S.SectionFrame>
          <S.Title>내용을 입력해 주세요</S.Title>
          <TextEditor />
        </S.SectionFrame>
        <S.SectionFrame>
          <S.Title>폰트 선택</S.Title>
          <SelectionDropdown selectList={FONTS} defaultValue="Noto Sans" />
        </S.SectionFrame>
        <Link to="/">
          <S.MarginFrame>
            <Button size="large" isDisabled={!senderName && true}>
              생성하기
            </Button>
          </S.MarginFrame>
        </Link>
      </S.LeftAlignFrame>
    </S.Container>
  );
};

export default PostWritingPage;
