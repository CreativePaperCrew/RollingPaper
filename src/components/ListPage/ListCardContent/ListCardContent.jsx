import ListCard from '../ListCard/ListCard';
import { LeftArrowButton, RigthArrowButton } from '../ArrowButton/ArrowButton';
import * as S from './ListCardContentStyle';

const ListCardContent = ({
  sortedDataList,
  slideIndex,
  handlePrevious,
  handleNext,
}) => {
  return (
    <S.ListCardsContainer>
      {sortedDataList.slice(slideIndex, slideIndex + 4).map((element) => (
        <ListCard key={element.id} cardData={element} />
      ))}
      {slideIndex > 0 && (
        <S.LeftArrowButtonContainer>
          <LeftArrowButton onClick={handlePrevious} />
        </S.LeftArrowButtonContainer>
      )}
      {slideIndex + 4 < sortedDataList.length && (
        <S.RightArrowButtonContainer>
          <RigthArrowButton onClick={handleNext} />
        </S.RightArrowButtonContainer>
      )}
    </S.ListCardsContainer>
  );
};

export default ListCardContent;
