import { useState, useEffect } from 'react';
import ListCardContent from '../../components/ListPage/ListCardContent/ListCardContent';
import useRecipientData from '../../hooks/useFetchRecipient';
import * as S from './ListPageStyle';

const ListPage = () => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [limit, setLimit] = useState(4);
  const [offsetPopular, setOffsetPopular] = useState(0);
  const [offsetRecent, setOffsetRecent] = useState(0);

  const { data: popularData, error: popularError } = useRecipientData(
    limit,
    offsetPopular,
    'like',
  );
  const { data: recentData, error: recentError } = useRecipientData(
    limit,
    offsetRecent,
    '',
  );

  useEffect(() => {
    updateScroll();
    window.addEventListener('resize', updateScroll);

    return () => window.removeEventListener('resize', updateScroll);
  }, []);

  const updateScroll = () => {
    const isSmallScreen = window.innerWidth < 1200;
    setIsScrollable(isSmallScreen);
    if (isSmallScreen) {
      setLimit(8);
      setOffsetPopular(0);
      setOffsetRecent(0);
    } else {
      setLimit(4);
    }
  };

  const handlePreviousPopular = () => {
    setOffsetPopular(offsetPopular - 1);
  };

  const handleNextPopular = () => {
    setOffsetPopular(offsetPopular + 1);
  };

  const handlePreviousRecent = () => {
    setOffsetRecent(offsetRecent - 1);
  };

  const handleNextRecent = () => {
    setOffsetRecent(offsetRecent + 1);
  };

  if (popularError) {
    return <div>Error: {popularError.message}</div>;
  }

  if (recentError) {
    return <div>Error: {recentError.message}</div>;
  }

  return (
    <>
      <S.Container>
        <S.ListCardContentContainer>
          <S.ListCardTitle>인기 롤링 페이퍼 🔥</S.ListCardTitle>
          <ListCardContent
            isScrollable={isScrollable}
            listData={popularData}
            handlePrevious={handlePreviousPopular}
            handleNext={handleNextPopular}
            offset={offsetPopular}
          />
        </S.ListCardContentContainer>
        <S.ListCardContentContainer>
          <S.ListCardTitle>최근에 만든 롤링 페이퍼 ⭐️</S.ListCardTitle>
          <ListCardContent
            isScrollable={isScrollable}
            listData={recentData}
            handlePrevious={handlePreviousRecent}
            handleNext={handleNextRecent}
            offset={offsetRecent}
          />
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
