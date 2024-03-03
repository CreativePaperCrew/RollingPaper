import {
  BoldText,
  ProfileCircle,
  ProfileCircles,
  TextArea,
  WritersListContainer,
} from './WritersListStyle';

export default function WritersList({ messageCount, recentMessages }) {
  return (
    <WritersListContainer>
      <ProfileCircles>
        {recentMessages &&
          recentMessages.map((msg, i) => (
            <ProfileCircle key={i} $imgUrl={msg.profileImageURL} />
          ))}
        <ProfileCircle>{`+${messageCount - recentMessages.length}`}</ProfileCircle>
      </ProfileCircles>
      <TextArea>
        <BoldText>{messageCount}</BoldText>명이 작성했어요!
      </TextArea>
    </WritersListContainer>
  );
}
