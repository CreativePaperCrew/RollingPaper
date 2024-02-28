import * as S from './ListColorCardStyle';
import patternImgPurple from '../../assets/images/cardPattern1.svg';
import patternImgBeige from '../../assets/images/cardPattern2.svg';
import patternImgBlue from '../../assets/images/cardPattern3.svg';
import patternImgGreen from '../../assets/images/cardPattern4.svg';

const ListColorCard = ({ cardData }) => {
  const { name, messageCount, backgroundColor } = cardData;
  let patternColor;

  switch (backgroundColor) {
    case 'beige':
      patternColor = patternImgBeige;
      break;
    case 'purple':
      patternColor = patternImgPurple;
      break;
    case 'blue':
      patternColor = patternImgBlue;
      break;
    case 'green':
      patternColor = patternImgGreen;
      break;
    default:
      patternColor = patternImgPurple;
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
            <S.MessageCountText>명이 작성했어요!</S.MessageCountText>
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
