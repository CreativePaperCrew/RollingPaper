import * as S from './ListCardStyle';
import patternImgPurple from '../../../assets/images/cardPattern1.svg';
import patternImgBeige from '../../../assets/images/cardPattern2.svg';
import patternImgBlue from '../../../assets/images/cardPattern3.svg';
import patternImgGreen from '../../../assets/images/cardPattern4.svg';

const ListCard = ({ cardData }) => {
  const { name, messageCount, backgroundImageURL, backgroundColor } = cardData;
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
    <S.CardContainer
      $backgroundImageURL={backgroundImageURL}
      color={backgroundColor}
    >
      <S.CardContentContainer>
        <S.RecipientContainer>
          <S.Recipient $backgroundImageURL={backgroundImageURL}>
            To. {name}
          </S.Recipient>
          <p>추가예정</p>
          <S.MessageCountContainer>
            <S.MessageCount $backgroundImageURL={backgroundImageURL}>
              {messageCount}
            </S.MessageCount>
            <S.MessageCountText $backgroundImageURL={backgroundImageURL}>
              명이 작성했어요!
            </S.MessageCountText>
          </S.MessageCountContainer>
        </S.RecipientContainer>
        <S.EmojiContainer>
          <S.Divider />
          <div>추가예정</div>
        </S.EmojiContainer>
      </S.CardContentContainer>
      {!backgroundImageURL && (
        <S.CardPattern src={patternColor} alt="패턴이미지" />
      )}
    </S.CardContainer>
  );
};

export default ListCard;
