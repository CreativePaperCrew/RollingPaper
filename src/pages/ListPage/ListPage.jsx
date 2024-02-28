import * as S from './ListPageStyle';
import teamApiClient from '../../apis/teamApiConfig';
import Button from '../../components/common/Button/Button';
import Header from '../../components/common/Header/Header';
import ListCard from '../../components/ListCard/ListCard';
import { useEffect, useState } from 'react';

const ListPage = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    teamApiClient.get('/recipients/').then((res) => {
      setListData(res.data.results);
    });
  }, []);

  return (
    <>
      <Header />
      {listData.map((element) => (
        <ListCard key={element.id} cardData={element} />
      ))}
      <S.ButtonContainer>
        <Button text="나도 만들어보기" to="/post" width={17.5} />
      </S.ButtonContainer>
    </>
  );
};

export default ListPage;
