import * as S from './ListCardStyle';
import patternImgPurple from '../../../assets/images/cardPattern1.svg';
import patternImgBeige from '../../../assets/images/cardPattern2.svg';
import patternImgBlue from '../../../assets/images/cardPattern3.svg';
import patternImgGreen from '../../../assets/images/cardPattern4.svg';
import TopReactions from '../../TopReactions/TopReactions';
import { COLORS } from '../../../constants/colors';
import ProfileCircles from '../../ProfileCircles/ProfileCircles';

const patternImages = {
  beige: patternImgBeige,
  purple: patternImgPurple,
  blue: patternImgBlue,
  green: patternImgGreen,
};

const getBackgroundColor = (color) => `var(${COLORS[color] || '--purple-200'})`;

const ListCard = ({ cardData }) => {
  const {
    name,
    messageCount,
    backgroundImageURL,
    backgroundColor,
    topReactions,
    recentMessages,
  } = cardData;

  return (
    <S.CardContainer
      $backgroundImageURL={backgroundImageURL}
      color={getBackgroundColor(backgroundColor)}
    >
      <S.CardContentContainer>
        <S.RecipientContainer>
          <S.Recipient $backgroundImageURL={backgroundImageURL}>
            To. {name}
          </S.Recipient>
          <S.ProfileCirclesContainer>
            <ProfileCircles
              messageCount={messageCount}
              recentMessages={recentMessages}
            />
          </S.ProfileCirclesContainer>
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
          <TopReactions topReactions={topReactions} />
        </S.EmojiContainer>
      </S.CardContentContainer>
      {!backgroundImageURL && (
        <S.CardPattern
          src={patternImages[backgroundColor] || patternImgPurple}
          alt="패턴이미지"
        />
      )}
    </S.CardContainer>
  );
};

export default ListCard;
