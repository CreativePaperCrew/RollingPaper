import ProfileCircles from '../ProfileCircles/ProfileCircles';
import * as S from './WritersListStyle';

export default function WritersList({ messageCount, recentMessages }) {
  return (
    <S.WritersListContainer>
      <ProfileCircles
        messageCount={messageCount}
        recentMessages={recentMessages}
      />
      <S.TextArea>
        <S.BoldText>{messageCount}</S.BoldText>명이 작성했어요!
      </S.TextArea>
    </S.WritersListContainer>
  );
}
