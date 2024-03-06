import {
  LeftArrowButton,
  RightArrowButton,
} from '../../common/Buttons/ArrowButton/ArrowButton';
import ListCard from '../ListCard/ListCard';
import * as S from './ListCardContentStyle';

const ListCardContent = ({
  isScrollable,
  listData,
  handlePrevious,
  handleNext,
  offset,
}) => {
  const isLeftArrowVisible = !isScrollable && offset > 0;
  const isRightArrowVisible = !isScrollable && offset + 4 < 8;
  return (
    <S.ListCardsContainer $isScrollable={isScrollable}>
      {listData.map((element) => (
        <S.LinkStyle to={`/post/${element.id}`} key={element.id}>
          <ListCard cardData={element} />
        </S.LinkStyle>
      ))}
      {isLeftArrowVisible && (
        <S.LeftArrowButtonContainer>
          <LeftArrowButton onClick={handlePrevious} />
        </S.LeftArrowButtonContainer>
      )}
      {isRightArrowVisible && (
        <S.RightArrowButtonContainer>
          <RightArrowButton onClick={handleNext} />
        </S.RightArrowButtonContainer>
      )}
    </S.ListCardsContainer>
  );
};

export default ListCardContent;
