import { useState, useEffect } from 'react';
import ListCard from '../ListCard/ListCard';
import { LeftArrowButton, RigthArrowButton } from '../ArrowButton/ArrowButton';
import * as S from './ListCardContentStyle';

const ListCardContent = ({ sortedDataList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const updateVisibleCards = () => {
      const screenWidth = window.innerWidth;
      const numVisibleCards = screenWidth >= 1200 ? 4 : sortedDataList.length;
      const newVisibleCards = sortedDataList.slice(
        currentIndex,
        currentIndex + numVisibleCards,
      );
      setVisibleCards(newVisibleCards);
      setIsScrollable(screenWidth < 1200);
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => window.removeEventListener('resize', updateVisibleCards);
  }, [currentIndex, sortedDataList]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 4));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(sortedDataList.length - 1, prevIndex + 4),
    );
  };

  return (
    <S.ListCardsContainer $isScrollable={isScrollable}>
      {visibleCards.map((element) => (
        <S.LinkStyle to={`/post/${element.id}`} key={element.id}>
          <ListCard key={element.id} cardData={element} />
        </S.LinkStyle>
      ))}
      {currentIndex > 0 && !isScrollable && (
        <S.LeftArrowButtonContainer>
          <LeftArrowButton onClick={handlePrevious} />
        </S.LeftArrowButtonContainer>
      )}
      {currentIndex + visibleCards.length < sortedDataList.length &&
        !isScrollable && (
          <S.RightArrowButtonContainer>
            <RigthArrowButton onClick={handleNext} />
          </S.RightArrowButtonContainer>
        )}
    </S.ListCardsContainer>
  );
};

export default ListCardContent;
