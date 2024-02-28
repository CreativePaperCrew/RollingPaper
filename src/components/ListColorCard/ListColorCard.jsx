import * as S from './ListColorCardStyle';
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
    <S.CardContainer color={backgroundColor}>
      <S.CardContentContainer>
        <S.RecipientContainer>
          <S.Recipient>To. {name}</S.Recipient>
          <p>추가예정</p>
          <S.MessageCountContainer>
            <S.MessageCount>{messageCount}</S.MessageCount>
            <S.MessageCountText>명이 작성했어요</S.MessageCountText>
          </S.MessageCountContainer>
        </S.RecipientContainer>
        <S.EmojiContainer>
          <S.Divider />
          <div>추가예정</div>
        </S.EmojiContainer>
      </S.CardContentContainer>
      <S.CardPattern src={patternColor} alt="패턴이미지" />
    </S.CardContainer>
  );
};

export default ListColorCard;
