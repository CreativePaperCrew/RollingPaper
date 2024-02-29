import { useEffect, useState } from 'react';
import teamApiClient from '../../apis/teamApiConfig';
import Button from '../../components/common/Button/Button';
import Header from '../../components/common/Header/Header';
import ListCard from '../../components/ListPage/ListCard/ListCard';
import * as S from './ListPageStyle';
import {
  LeftArrowButton,
  RigthArrowButton,
} from '../../components/ListPage/ArrowButton/ArrowButton';

const ListPage = () => {
  const [listData, setListData] = useState([]);
  const [slideMessageCount, setSlideMessageCount] = useState(0);
  const [slideCreatedAt, setSlideCreatedAt] = useState(0);

  useEffect(() => {
    teamApiClient.get('/recipients/').then((res) => {
      setListData(res.data.results);
    });
  }, []);

  const compareMessageCount = (a, b) => {
    return b.messageCount - a.messageCount;
  };

  const compareCreatedAt = (a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  };

  const sortedMessageCountList = listData.slice().sort(compareMessageCount);
  const sortedCreatedAtList = listData.slice().sort(compareCreatedAt);

  const handleNextMessageCount = () => {
    setSlideMessageCount((prevIndex) =>
      Math.min(prevIndex + 4, listData.length - 1),
    );
  };

  const handlePreviousMessageCount = () => {
    setSlideMessageCount((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const handleNextCreatedAt = () => {
    setSlideCreatedAt((prevIndex) =>
      Math.min(prevIndex + 4, listData.length - 1),
    );
  };

  const handlePreviousCreatedAt = () => {
    setSlideCreatedAt((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.ListCardContentContainer>
          <S.ListCardTitle>인기 롤링 페이퍼 🔥</S.ListCardTitle>
          <S.ListCardsContainer>
            {sortedMessageCountList
              .slice(slideMessageCount, slideMessageCount + 4)
              .map((element) => (
                <ListCard key={element.id} cardData={element} />
              ))}
            {slideMessageCount > 0 && (
              <S.LeftArrowButtonContainer>
                <LeftArrowButton onClick={handlePreviousMessageCount} />
              </S.LeftArrowButtonContainer>
            )}
            {slideMessageCount + 4 < sortedMessageCountList.length && (
              <S.RightArrowButtonContainer>
                <RigthArrowButton onClick={handleNextMessageCount} />
              </S.RightArrowButtonContainer>
            )}
          </S.ListCardsContainer>
        </S.ListCardContentContainer>
        <S.ListCardContentContainer>
          <S.ListCardTitle>최근에 만든 롤링 페이퍼 ⭐️</S.ListCardTitle>

          <S.ListCardsContainer>
            {sortedCreatedAtList
              .slice(slideCreatedAt, slideCreatedAt + 4)
              .map((element) => (
                <ListCard key={element.id} cardData={element} />
              ))}
            {slideCreatedAt > 0 && (
              <S.LeftArrowButtonContainer>
                <LeftArrowButton onClick={handlePreviousCreatedAt} />
              </S.LeftArrowButtonContainer>
            )}
            {slideCreatedAt + 4 < sortedCreatedAtList.length && (
              <S.RightArrowButtonContainer>
                <RigthArrowButton onClick={handleNextCreatedAt} />
              </S.RightArrowButtonContainer>
            )}
          </S.ListCardsContainer>
        </S.ListCardContentContainer>
      </S.Container>
      <S.ButtonContainer>
        <Button text="나도 만들어보기" to="/post" width={17.5} />
      </S.ButtonContainer>
    </>
  );
};

export default ListPage;
