import { useState, useEffect } from 'react';
import useFetchData from '../../../hooks/useFetchData';
import { getRecipients } from '../../../apis/recipientRollingPaperApi';
import ListCard from '../ListCard/ListCard';
import arrowLeftImg from '../../../assets/icons/arrowLeft.svg';
import arrowRightImg from '../../../assets/icons/arrowRight.svg';
import * as S from './ListCardContentStyle';
import { ArrowButton } from '../../common/Buttons/ArrowButton/ArrowButton';

const MAX_SCREEN_WIDTH = 1200;
const MAX_LIST_LENGTH = 8;
const DEFAULT_LIMIT = 4;
const DEFAULT_OFFSET = 0;

const ListCardContent = ({ isSortLike }) => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [offset, setOffset] = useState(DEFAULT_OFFSET);

  const { data: listData, error } = useFetchData(getRecipients, [
    limit,
    offset,
    isSortLike,
  ]);

  useEffect(() => {
    updateScroll();
    window.addEventListener('resize', updateScroll);

    return () => window.removeEventListener('resize', updateScroll);
  }, []);

  const updateScroll = () => {
    const isSmallScreen =
      document.documentElement.clientWidth < MAX_SCREEN_WIDTH;
    setIsScrollable(isSmallScreen);
    if (isSmallScreen) {
      setLimit(MAX_LIST_LENGTH);
      setOffset(DEFAULT_OFFSET);
    } else {
      setLimit(DEFAULT_LIMIT);
    }
  };

  const handlePrevious = () => {
    setOffset(offset - 1);
  };

  const handleNext = () => {
    setOffset(offset + 1);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <S.ListCardsContainer $isScrollable={isScrollable}>
      {listData &&
        listData.map((element) => (
          <S.LinkStyle to={`/post/${element.id}`} key={element.id}>
            <ListCard cardData={element} />
          </S.LinkStyle>
        ))}
      {!isScrollable && offset > 0 && (
        <S.LeftArrowButtonContainer>
          <ArrowButton image={arrowLeftImg} onClick={handlePrevious} />
        </S.LeftArrowButtonContainer>
      )}
      {!isScrollable && offset + 4 < 8 && (
        <S.RightArrowButtonContainer>
          <ArrowButton image={arrowRightImg} onClick={handleNext} />
        </S.RightArrowButtonContainer>
      )}
    </S.ListCardsContainer>
  );
};
export default ListCardContent;
