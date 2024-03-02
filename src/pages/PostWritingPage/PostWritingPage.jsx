import Input from '../../components/Input/Input';
import * as S from './PostWritingPageStyle';
import basicProfile from '../../assets/icons/basicProfile.svg';
import RelationDropdown from '../../components/RelationDropdown/RelationDropdown';
import { useEffect, useState } from 'react';
import getProfileImages from '../../apis/getProfileImages';

const PostWritingPage = () => {
  const [recipient, setRecipient] = useState('');
  const [profileImageUrls, setProfileImageUrls] = useState([]);

  useEffect(() => {
    getProfileImages()
      .then((res) => {
        setProfileImageUrls(res.imageUrls);
      })
      .catch((error) => alert(error.message));
  }, []);

  const saveRecipient = (e) => {
    setRecipient(e.target.value);
  };

  return (
    <S.Container>
      <S.LeftAlign>
        <S.Receiver>
          <S.Title>From.</S.Title>
          <Input
            width="long"
            saveRecipient={saveRecipient}
            recipient={recipient}
          >
            보내는 사람 이름을 입력해주세요
          </Input>
        </S.Receiver>
        <S.ProfileImage>
          <S.Title>프로필 이미지</S.Title>
          <S.ImageContainer>
            <div>
              <img src={basicProfile} alt="basic-profile" />
            </div>
            <S.ImageSelector>
              <S.ProfileMessage>프로필 이미지를 선택해주세요</S.ProfileMessage>
              <S.ImageList>
                {profileImageUrls.map((url) => (
                  <S.AvaliableImages src={url} key={url} />
                ))}
              </S.ImageList>
            </S.ImageSelector>
          </S.ImageContainer>
        </S.ProfileImage>
        <S.Receiver>
          <S.Title>상대와의 관계</S.Title>
          <RelationDropdown />
        </S.Receiver>
        <S.Receiver>
          <S.Title>내용을 입력해 주세요</S.Title>
        </S.Receiver>
        <S.Receiver>
          <S.Title>폰트 선택</S.Title>
        </S.Receiver>
      </S.LeftAlign>
    </S.Container>
  );
};

export default PostWritingPage;
