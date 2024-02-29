import { useCallback, useEffect, useState } from 'react';
import * as S from './PostCreatingPageStyle';
import Input from '../../components/Input/Input';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import BackgroundSelector from '../../components/BackgroundSelector/BackgroundSelector';

const PostCreatingPage = () => {
  const [select, setSelect] = useState('color');

  const handleColorClick = () => {
    setSelect('color');
  };

  const handleImageClick = () => {
    setSelect('image');
  };

  return (
    <>
      <header></header>
      <main>
        <S.ContainerWhole>
          <S.ContainerReceiver>
            <S.Title>To.</S.Title>
            <Input width="long">받는 사람 이름을 입력해주세요.</Input>
          </S.ContainerReceiver>
          <S.ContainerSelect>
            <S.Title>배경화면을 선택해 주세요.</S.Title>
            <S.InformationMessage>
              컬러를 선택하거나, 이미지를 선택할 수 있습니다.
            </S.InformationMessage>
          </S.ContainerSelect>
          <ToggleButton
            handleColorClick={handleColorClick}
            handleImageClick={handleImageClick}
            select={select}
          />
          {<BackgroundSelector select={select} />}
        </S.ContainerWhole>
      </main>
    </>
  );
};

export default PostCreatingPage;
