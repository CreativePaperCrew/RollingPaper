import ListColorCard from '../ListColorCard/ListColorCard';
import ListImgCard from '../ListImgCard/ListImgCard';

const ListCard = ({ cardData }) => {
  const { backgroundImageURL } = cardData;
  if (!backgroundImageURL) {
    return <ListColorCard />;
  } else {
    return <ListImgCard />;
  }
};

export default ListCard;
