import * as S from './ListImgCardStyle';

const ListColorCard = ({ cardData }) => {
  const { name, messageCount, backgroundImageURL } = cardData;

  return (
    <S.CardContainer src={backgroundImageURL}>
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
    </S.CardContainer>
  );
};

export default ListColorCard;
