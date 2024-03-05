import * as S from './ProfileCirclesStyle';

export default function ProfileCircles({ messageCount, recentMessages }) {
  return (
    <S.ProfileCirclesContainer>
      {recentMessages &&
        recentMessages.map((msg) => (
          <S.ProfileCircle key={msg.id} $imgUrl={msg.profileImageURL} />
        ))}
      <S.ProfileCircle>{`+${messageCount - recentMessages.length}`}</S.ProfileCircle>
    </S.ProfileCirclesContainer>
  );
}
