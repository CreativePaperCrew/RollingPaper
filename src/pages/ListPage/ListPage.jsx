import { useEffect, useState } from 'react';
import teamApiClient from '../../apis/teamApiConfig';
import ListCardContent from '../../components/ListPage/ListCardContent/ListCardContent';
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
      <S.Container>
        <S.ListCardContentContainer>
          <S.ListCardTitle>인기 롤링 페이퍼 🔥</S.ListCardTitle>
          <ListCardContent sortedDataList={sortedMessageCountList} />
        </S.ListCardContentContainer>
        <S.ListCardContentContainer>
          <S.ListCardTitle>최근에 만든 롤링 페이퍼 ⭐️</S.ListCardTitle>
          <ListCardContent sortedDataList={sortedCreatedAtList} />
        </S.ListCardContentContainer>
      </S.Container>
      <S.ButtonContainer>
        <S.ButtonLink to="/list">
          <S.CustomButton size="medium">나도해보기</S.CustomButton>
        </S.ButtonLink>
      </S.ButtonContainer>
    </>
  );
};

export default ListPage;
