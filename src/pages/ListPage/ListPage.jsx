import ListCardContent from '../../components/ListPage/ListCardContent/ListCardContent';
import * as S from './ListPageStyle';

const ListPage = () => {
  return (
    <>
      <S.Container>
        <S.ListCardContentContainer>
          <S.ListCardTitle>인기 롤링 페이퍼 🔥</S.ListCardTitle>
          <ListCardContent isSortLike="like" />
        </S.ListCardContentContainer>
        <S.ListCardContentContainer>
          <S.ListCardTitle>최근에 만든 롤링 페이퍼 ⭐️</S.ListCardTitle>
          <ListCardContent isSortLike="" />
        </S.ListCardContentContainer>
      </S.Container>
      <S.ButtonContainer>
        <S.ButtonLink to="/post">
          <S.CustomButton size="medium">나도해보기</S.CustomButton>
        </S.ButtonLink>
      </S.ButtonContainer>
    </>
  );
};
export default ListPage;
