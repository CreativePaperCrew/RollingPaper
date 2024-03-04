import { useState, useEffect } from 'react';
import ListCard from '../ListCard/ListCard';
import { LeftArrowButton, RightArrowButton } from '../ArrowButton/ArrowButton';
import * as S from './ListCardContentStyle';
import teamApiClient from '../../../apis/teamApiConfig';

const ListCardContent = ({ isSortLike }) => {
  const [listData, setListData] = useState([]);
  const [isScrollable, setIsScrollable] = useState(false);
  const [limit, setLimit] = useState(4);
  const [offset, setOffset] = useState(0);

  const updateScroll = () => {
    const isSmallScreen = window.innerWidth < 1200;
    setIsScrollable(isSmallScreen);
    if (isSmallScreen) {
      setLimit(8);
      setOffset(0);
    } else {
      setLimit(4);
    }
  };

  useEffect(() => {
    updateScroll();
    window.addEventListener('resize', updateScroll);

    return () => window.removeEventListener('resize', updateScroll);
  }, []);

  useEffect(() => {
    teamApiClient
      .get(`/recipients/?limit=${limit}&offset=${offset}&sort=${isSortLike}`)
      .then((res) => {
        setListData(res.data.results);
      });
  }, [limit, offset, isSortLike]);

  const handlePrevious = () => {
    setOffset(offset - 1);
  };

  const handleNext = () => {
    setOffset(offset + 1);
  };

  return (
    <S.ListCardsContainer $isScrollable={isScrollable}>
      {listData.map((element) => (
        <S.LinkStyle to={`/post/${element.id}`} key={element.id}>
          <ListCard key={element.id} cardData={element} />
        </S.LinkStyle>
      ))}
      {offset > 0 && !isScrollable && (
        <S.LeftArrowButtonContainer>
          <LeftArrowButton onClick={handlePrevious} />
        </S.LeftArrowButtonContainer>
      )}
      {offset + 4 <= listData.length && !isScrollable && (
        <S.RightArrowButtonContainer>
          <RightArrowButton onClick={handleNext} />
        </S.RightArrowButtonContainer>
      )}
    </S.ListCardsContainer>
  );
};

export default ListCardContent;
