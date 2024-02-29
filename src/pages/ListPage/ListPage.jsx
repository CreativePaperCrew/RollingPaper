import { useEffect, useState } from 'react';
import teamApiClient from '../../apis/teamApiConfig';
import LinkButton from '../../components/common/Buttons/LinkButton/LinkButton';
import ListCardContent from '../../components/ListPage/ListCardContent/ListCardContent';
import * as S from './ListPageStyle';

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

  const handleSlideChangeMessageCount = (step) => {
    setSlideMessageCount((prevIndex) =>
      Math.max(Math.min(prevIndex + step, listData.length - 1), 0),
    );
  };

  const handleSlideChangeCreatedAt = (step) => {
    setSlideCreatedAt((prevIndex) =>
      Math.max(Math.min(prevIndex + step, listData.length - 1), 0),
    );
  };

  return (
    <>
      <S.Container>
        <S.ListCardContentContainer>
          <S.ListCardTitle>인기 롤링 페이퍼 🔥</S.ListCardTitle>
          <ListCardContent
            sortedDataList={sortedMessageCountList}
            slideIndex={slideMessageCount}
            handlePrevious={() => handleSlideChangeMessageCount(-4)}
            handleNext={() => handleSlideChangeMessageCount(4)}
          />
        </S.ListCardContentContainer>
        <S.ListCardContentContainer>
          <S.ListCardTitle>최근에 만든 롤링 페이퍼 ⭐️</S.ListCardTitle>
          <ListCardContent
            sortedDataList={sortedCreatedAtList}
            slideIndex={slideCreatedAt}
            handlePrevious={() => handleSlideChangeCreatedAt(-4)}
            handleNext={() => handleSlideChangeCreatedAt(4)}
          />
        </S.ListCardContentContainer>
      </S.Container>
      <S.ButtonContainer>
        <LinkButton text="나도 만들어보기" to="/post" width={17.5} />
      </S.ButtonContainer>
    </>
  );
};

export default ListPage;
