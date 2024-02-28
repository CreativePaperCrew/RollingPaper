import {
  MessageCount,
  MessageCountContainer,
  MessageCountText,
  Recipient,
  RecipientContainer,
  Divider,
  EmojiContainer,
  CardContentContainer,
  CardContainer,
  CardPattern,
} from './ListColorCardStyle';
import PatternImgPurple from '../../assets/images/CardPattern1.svg';
import PatternImgBeige from '../../assets/images/CardPattern2.svg';
import PatternImgBlue from '../../assets/images/CardPattern3.svg';
import PatternImgGreen from '../../assets/images/CardPattern4.svg';

const ListColorCard = ({ cardData }) => {
  const { name, messageCount, backgroundColor } = cardData;
  let patternColor;

  switch (backgroundColor) {
    case 'beige':
      patternColor = PatternImgBeige;
      break;
    case 'purple':
      patternColor = PatternImgPurple;
      break;
    case 'blue':
      patternColor = PatternImgBlue;
      break;
    case 'green':
      patternColor = PatternImgGreen;
      break;
    default:
      patternColor = PatternImgPurple;
      break;
  }

  return (
    <CardContainer color={backgroundColor}>
      <CardContentContainer>
        <RecipientContainer>
          <Recipient>To. {name}</Recipient>
          <p>추가예정</p>
          <MessageCountContainer>
            <MessageCount>{messageCount}</MessageCount>
            <MessageCountText>명이 작성했어요</MessageCountText>
          </MessageCountContainer>
        </RecipientContainer>
        <EmojiContainer>
          <Divider />
          <div>추가예정</div>
        </EmojiContainer>
      </CardContentContainer>
      <CardPattern src={patternColor} alt="패턴이미지" />
    </CardContainer>
  );
};

export default ListColorCard;
