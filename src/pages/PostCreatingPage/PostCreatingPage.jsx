import { useEffect, useState } from 'react';
import * as S from './PostCreatingPageStyle';
import Input from '../../components/Input/Input';
import BackgroundTypeSelectButton from '../../components/BackgroundTypeSelectButton/BackgroundTypeSelectButton';
import BackgroundSelector from '../../components/BackgroundSelector/BackgroundSelector';
import getBackgroundImages from '../../apis/getBackgroundImages';
import Button from '../../components/common/Buttons/Button/Button';
import { postRecipient } from '../../apis/recipientRollingPaperApi';

const PostCreatingPage = () => {
  const [recipient, setRecipient] = useState('');
  const [select, setSelect] = useState('color');
  const [selectedColor, setSelectedColor] = useState('beige');
  const [selectedImage, setSeletedImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    getBackgroundImages()
      .then((res) => {
        setImageUrls(res.imageUrls);
      })
      .catch((error) => alert(error.message));
  }, []);

  useEffect(() => {
    if (select === 'image') {
      setSeletedImage(imageUrls[0]);
    } else {
      setSeletedImage(null);
    }
  }, [select, imageUrls]);

  const saveRecipient = (e) => {
    setRecipient(e.target.value);
  };

  const handleColorButtonClick = () => {
    setSelect('color');
  };

  const handleImageButtonClick = () => {
    setSelect('image');
  };

  const handleColorBoxClick = (color) => {
    setSelectedColor(color);
    setSeletedImage(null);
  };

  const handleImageBoxClick = (image) => {
    setSeletedImage(image);
  };

  const handleCreateButtonClick = async (
    name,
    backgroundColor,
    backgroundImageURL,
  ) => {
    try {
      const response = await postRecipient(
        name,
        backgroundColor,
        backgroundImageURL,
      );
      console.log(response);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <S.Container>
      <S.Receiver>
        <S.Title>To.</S.Title>
        <Input width="long" saveRecipient={saveRecipient} recipient={recipient}>
          받는 사람 이름을 입력해주세요.
        </Input>
      </S.Receiver>
      <S.BackgroundSelection>
        <S.Title>배경화면을 선택해 주세요.</S.Title>
        <S.InformationMessage>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </S.InformationMessage>
      </S.BackgroundSelection>
      <BackgroundTypeSelectButton
        handleColorButtonClick={handleColorButtonClick}
        handleImageButtonClick={handleImageButtonClick}
        select={select}
      />
      <BackgroundSelector
        select={select}
        selectedColor={selectedColor}
        selectedImage={selectedImage}
        handleColorBoxClick={handleColorBoxClick}
        handleImageBoxClick={handleImageBoxClick}
        imageUrls={imageUrls}
      />
      <Button
        size="large"
        handleButtonClick={() =>
          handleCreateButtonClick(recipient, selectedColor, selectedImage)
        }
      >
        생성하기
      </Button>
    </S.Container>
  );
};

export default PostCreatingPage;
