import { useState, useEffect } from 'react';
import { getRecipients } from '../../../apis/recipientRollingPaperApi';
import {
  LeftArrowButton,
  RightArrowButton,
} from '../../common/Buttons/ArrowButton/ArrowButton';
import ListCard from '../ListCard/ListCard';
import * as S from './ListCardContentStyle';

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
    const fetchRecipient = async () => {
      try {
        const response = await getRecipients({ limit, offset, isSortLike });
        setListData(response);
      } catch (error) {
        console.error(
          '롤링페이퍼 대상자를 불러오는데 실패했습니다:',
          error.message,
        );
      }
    };

    fetchRecipient();
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
      {!isScrollable && offset > 0 && (
        <S.LeftArrowButtonContainer>
          <LeftArrowButton onClick={handlePrevious} />
        </S.LeftArrowButtonContainer>
      )}
      {!isScrollable && offset + 4 <= listData.length && (
        <S.RightArrowButtonContainer>
          <RightArrowButton onClick={handleNext} />
        </S.RightArrowButtonContainer>
      )}
    </S.ListCardsContainer>
  );
};

export default ListCardContent;
