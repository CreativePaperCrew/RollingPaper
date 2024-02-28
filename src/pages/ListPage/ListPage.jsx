import * as S from './ListPageStyle';
import Button from '../../components/common/Button/Button';
import Header from '../../components/common/Header/Header';

const ListPage = () => {
  const dummyListData = {
    count: 10,
    next: 'https://rolling-api.vercel.app/1-5/recipients/?limit=8&offset=8',
    previous: null,
    results: [
      {
        id: 2485,
        name: 'ㅇㅇ',
        backgroundColor: 'purple',
        backgroundImageURL: null,
        createdAt: '2024-01-03T11:42:30.086952Z',
        messageCount: 1,
        recentMessages: [
          {
            id: 4462,
            recipientId: 2485,
            sender: 'ㅇㅇ',
            profileImageURL: 'https://picsum.photos/id/522/100/100',
            relationship: '지인',
            content: '<p>ㅇㅇㅇㅇㅇ</p>',
            font: '나눔명조',
            createdAt: '2024-01-03T11:43:38.306919Z',
          },
        ],
        reactionCount: 0,
        topReactions: [],
      },
      {
        id: 1096,
        name: 'ㄴ',
        backgroundColor: 'beige',
        backgroundImageURL: 'https://picsum.photos/id/24/3840/2160',
        createdAt: '2023-12-15T02:52:01.736422Z',
        messageCount: 1,
        recentMessages: [
          {
            id: 2864,
            recipientId: 1096,
            sender: 'ㅇㅂㅇ',
            profileImageURL: 'https://i.postimg.cc/ncsxyP5d/Frame-2593.png',
            relationship: '친구',
            content: '<p>ㄹㄹ</p>',
            font: 'Noto Sans',
            createdAt: '2023-12-15T02:52:07.099692Z',
          },
        ],
        reactionCount: 0,
        topReactions: [],
      },
      {
        id: 731,
        name: '코드잇 팀원들',
        backgroundColor: 'beige',
        backgroundImageURL: 'https://picsum.photos/id/683/3840/2160',
        createdAt: '2023-11-16T12:53:31.837085Z',
        messageCount: 4,
        recentMessages: [
          {
            id: 2286,
            recipientId: 731,
            sender: '열혈 코딩',
            profileImageURL: 'https://picsum.photos/id/494/100/100',
            relationship: '친구',
            content:
              '<p><strong style="color: rgb(255, 153, 0);"><u>오늘의 개발 지식~</u></strong></p><p><br></p><p><em>react developer tools</em> 문서입니다!</p><p><br></p><p>Adds React debugging tools to the Chrome Developer Tools.</p><p><br></p><p>Created from revision ef8a840bd on 10/25/2023.</p><p>React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. It allows you to inspect the React component hierarchies in the Chrome Developer Tools.</p><p><br></p><p>You will get two new tabs in your Chrome DevTools: "⚛️ Components" and "⚛️ Profiler".</p><p><br></p><p>The Components tab shows you the root React components that were rendered on the page, as well as the subcomponents that they ended up rendering.</p><p><br></p><p>By selecting one of the components in the tree, you can inspect and edit its current props and state in the panel on the right. In the breadcrumbs you can inspect the selected component, the component that created it, the component that created that one, and so on.</p><p><br></p><p>If you inspect a React element on the page using the regular Elements tab, then switch over to the React tab, that element will be automatically selected in the React tree.</p><p><br></p><p>The Profiler tab allows you to record performance information.</p><p><br></p><p>This extension requires permissions to access the page\'s React tree, but it does not transmit any data remotely. It is fully open source, and you can find its source code at https://github.com/facebook/react/tree/master/packages/react-devtools-extensions.</p>',
            font: 'Noto Sans',
            createdAt: '2023-11-16T14:30:41.030116Z',
          },
          {
            id: 2276,
            recipientId: 731,
            sender: '새싹 개발자',
            profileImageURL: 'https://picsum.photos/id/494/100/100',
            relationship: '동료',
            content:
              '<p>멋진 코드잇 스프린터들 파이팅!! 부트캠프 1기생들 모두 파이팅입니다!! </p>',
            font: 'Pretendard',
            createdAt: '2023-11-16T12:55:58.803035Z',
          },
          {
            id: 2275,
            recipientId: 731,
            sender: '코드잇 팀원',
            profileImageURL: 'https://picsum.photos/id/571/100/100',
            relationship: '동료',
            content:
              '<p>감기 조심하세요!!! 날씨가 갑자기 추워졌네요 ㅠㅠ</p><p>언제나 따뜻하고 행복한 하루 되세요 :D </p>',
            font: '나눔명조',
            createdAt: '2023-11-16T12:54:54.071363Z',
          },
        ],
        reactionCount: 12,
        topReactions: [
          {
            id: 777,
            emoji: '🤭',
            count: 3,
          },
          {
            id: 738,
            emoji: '🥰',
            count: 2,
          },
          {
            id: 734,
            emoji: '😄',
            count: 2,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <S.ButtonContainer>
        <Button text="나도 만들어보기" to="/post" width={17.5} />
      </S.ButtonContainer>
    </>
  );
};

export default ListPage;
