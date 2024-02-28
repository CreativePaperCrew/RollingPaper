import * as S from './ListPageStyle';
import Button from '../../components/common/Button/Button';
import Header from '../../components/common/Header/Header';
import ListColorCard from '../../components/ListColorCard/ListColorCard';

const ListPage = () => {
  const dummyData = {
    name: '안연아',
    messageCount: 5,
    backgroundColor: 'blue',
  };
  return (
    <>
      <Header />
      <ListColorCard cardData={dummyData} />
      <S.ButtonContainer>
        <Button text="나도 만들어보기" to="/post" width={17.5} />
      </S.ButtonContainer>
    </>
  );
};

export default ListPage;
