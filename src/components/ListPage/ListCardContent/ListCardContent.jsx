import ListCard from '../ListCard/ListCard';
import { LeftArrowButton, RigthArrowButton } from '../ArrowButton/ArrowButton';
import * as S from './ListCardContentStyle';
import { Link } from 'react-router-dom';

const ListCardContent = ({
  sortedDataList,
  slideIndex,
  handlePrevious,
  handleNext,
}) => {
  return (
    <S.ListCardsContainer>
      {sortedDataList.slice(slideIndex, slideIndex + 4).map((element) => (
        <Link to={`/post/${element.id}`} key={element.id}>
          <ListCard key={element.id} cardData={element} />
        </Link>
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
