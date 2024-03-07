import * as S from './ProfileCirclesStyle';

export default function ProfileCircles({ messageCount, recentMessages }) {
  if (!messageCount) {
    return (
      <S.ProfileCirclesContainer>
        <S.EmptyProfile />
      </S.ProfileCirclesContainer>
    );
  }
  const howmanymore = messageCount - recentMessages.length;
  return (
    <S.ProfileCirclesContainer>
      {recentMessages?.map((msg) => (
        <S.ProfileCircle key={msg.id} $imgUrl={msg.profileImageURL} />
      ))}
      {howmanymore >= 1 ? <S.LastCircle>{`+${howmanymore}`}</S.LastCircle> : ''}
    </S.ProfileCirclesContainer>
  );
}
