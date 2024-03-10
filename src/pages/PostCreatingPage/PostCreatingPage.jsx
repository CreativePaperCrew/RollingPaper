import { useEffect, useState } from 'react';
import * as S from './PostCreatingPageStyle';
import Input from '../../components/Input/Input';
import BackgroundTypeSelectButton from '../../components/BackgroundTypeSelectButton/BackgroundTypeSelectButton';
import BackgroundSelector from '../../components/BackgroundSelector/BackgroundSelector';
import getBackgroundImages from '../../apis/getBackgroundImages';
import Button from '../../components/common/Buttons/Button/Button';
import { postRecipient } from '../../apis/recipientRollingPaperApi';
import { useNavigate } from 'react-router-dom';

const PostCreatingPage = () => {
  const [recipient, setRecipient] = useState('');
  const [select, setSelect] = useState('color');
  const [selectedColor, setSelectedColor] = useState('beige');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getBackgroundImages()
      .then((res) => {
        setImageUrls(res.imageUrls);
      })
      .catch((error) => alert(error.message));
  }, []);

  useEffect(() => {
    if (select === 'image') {
      setSelectedImage(imageUrls[0]);
    } else {
      setSelectedImage(null);
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
    setSelectedImage(null);
  };

  const handleImageBoxClick = (image) => {
    setSelectedImage(image);
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
      navigate('/post/' + response.id);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <S.Container>
      <S.LeftAlignFrame>
        <S.Receiver>
          <S.Title>To.</S.Title>
          <Input
            placeholder="받는 사람 이름을 입력해주세요."
            saveValue={saveRecipient}
            value={recipient}
          />
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
          isDisabled={!recipient && true}
          handleButtonClick={() =>
            handleCreateButtonClick(recipient, selectedColor, selectedImage)
          }
        >
          생성하기
        </Button>
      </S.LeftAlignFrame>
    </S.Container>
  );
};

export default PostCreatingPage;
