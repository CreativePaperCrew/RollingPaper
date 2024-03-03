import { useState, useEffect } from 'react';
import ListCard from '../ListCard/ListCard';
import { LeftArrowButton, RightArrowButton } from '../ArrowButton/ArrowButton';
import * as S from './ListCardContentStyle';

const ListCardContent = ({ sortedDataList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  const updateScroll = () => {
    const isSmallScreen = window.innerWidth < 1200;
    setIsScrollable(isSmallScreen);
    if (isSmallScreen) {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    updateScroll();
    window.addEventListener('resize', updateScroll);

    return () => window.removeEventListener('resize', updateScroll);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(sortedDataList.length - 1, prevIndex + 1),
    );
  };

  return (
    <S.ListCardsContainer $isScrollable={isScrollable}>
      {isScrollable
        ? sortedDataList.map((element) => (
            <S.LinkStyle to={`/post/${element.id}`} key={element.id}>
              <ListCard key={element.id} cardData={element} />
            </S.LinkStyle>
          ))
        : sortedDataList
            .slice(currentIndex, currentIndex + 4)
            .map((element) => (
              <S.LinkStyle to={`/post/${element.id}`} key={element.id}>
                <ListCard key={element.id} cardData={element} />
              </S.LinkStyle>
            ))}
      {currentIndex > 0 && !isScrollable && (
        <S.LeftArrowButtonContainer>
          <LeftArrowButton onClick={handlePrevious} />
        </S.LeftArrowButtonContainer>
      )}
      {currentIndex + 4 < sortedDataList.length && !isScrollable && (
        <S.RightArrowButtonContainer>
          <RightArrowButton onClick={handleNext} />
        </S.RightArrowButtonContainer>
      )}
    </S.ListCardsContainer>
  );
};

export default ListCardContent;
