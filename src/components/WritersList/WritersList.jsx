import * as S from './WritersListStyle';

export default function WritersList({ messageCount, recentMessages }) {
  return (
    <S.WritersListContainer>
      <S.ProfileCircles>
        {recentMessages &&
          recentMessages.map((msg) => (
            <S.ProfileCircle key={msg.id} $imgUrl={msg.profileImageURL} />
          ))}
        <S.ProfileCircle>{`+${messageCount - recentMessages.length}`}</S.ProfileCircle>
      </S.ProfileCircles>
      <S.TextArea>
        <S.BoldText>{messageCount}</S.BoldText>명이 작성했어요!
      </S.TextArea>
    </S.WritersListContainer>
  );
}
