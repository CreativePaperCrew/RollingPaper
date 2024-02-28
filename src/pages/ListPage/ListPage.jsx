import { useEffect, useState } from 'react';
import teamApiClient from '../../apis/teamApiConfig';
import Button from '../../components/common/Button/Button';
import Header from '../../components/common/Header/Header';
import ListCard from '../../components/ListPage/ListCard/ListCard';
import * as S from './ListPageStyle';

const ListPage = () => {
  const [listData, setListData] = useState([]);

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

  return (
    <>
      <Header />
      <S.Container>
        <S.ListCardContentContainer>
          <S.ListCardTitle>인기 롤링 페이퍼 🔥</S.ListCardTitle>
          <S.ListCardsContainer>
            {sortedMessageCountList.map((element) => (
              <ListCard key={element.id} cardData={element} />
            ))}
          </S.ListCardsContainer>
        </S.ListCardContentContainer>
        <S.ListCardContentContainer>
          <S.ListCardTitle>최근에 만든 롤링 페이퍼 ⭐️</S.ListCardTitle>
          <S.ListCardsContainer>
            {sortedCreatedAtList.map((element) => (
              <ListCard key={element.id} cardData={element} />
            ))}
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
