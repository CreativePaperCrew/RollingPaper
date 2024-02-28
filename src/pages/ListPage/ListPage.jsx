import * as S from './ListPageStyle';
import Button from '../../components/common/Button/Button';
import Header from '../../components/common/Header/Header';
import ListImgCard from '../../components/ListImgCard/ListImgCard';

const ListPage = () => {
  const dummyData = {
    name: '안연아',
    messageCount: 5,
    backgroundImageURL: 'https://picsum.photos/id/683/3840/2160',
  };
  return (
    <>
      <Header />
      <ListImgCard cardData={dummyData} />
      <S.ButtonContainer>
        <Button text="나도 만들어보기" to="/post" width={17.5} />
      </S.ButtonContainer>
    </>
  );
};

export default ListPage;
