import teamApiClient from './teamApiConfig';

/**
 * 특정 수신자의 롤링페이퍼 정보를 조회
 * @param {string} recipientId - 조회할 수신자의 ID
 * @returns {Promise} - 롤링페이퍼 정보를 포함하는 Promise 객체
 */
export const getRecipientRollingPapers = async (recipientId) => {
  try {
    const response = await teamApiClient.get(`/recipients/${recipientId}/`);
    return response.data;
  } catch (error) {
    throw new Error('롤링페이퍼 데이터를 불러오는데 실패했습니다');
  }
};

/**
 * 특정 수신자의 롤링페이퍼 메시지를 조회
 * @param {string} recipientId - 조회할 수신자의 ID
 * @returns {Promise} - 롤링페이퍼 메시지 정보를 포함하는 Promise 객체
 */
export const getRecipientRollingPaperMessages = async (recipientId) => {
  try {
    const response = await teamApiClient.get(
      `/recipients/${recipientId}/messages/`,
    );
    return response.data;
  } catch (error) {
    throw new Error('대상자의 롤링페이퍼 메시지를 불러오는데 실패했습니다');
  }
};

/**
 * 특정 수신자의 롤링페이퍼 반응을 조회
 * @param {string} recipientId - 조회할 수신자의 ID
 * @returns {Promise} - 롤링페이퍼 메시지 정보를 포함하는 Promise 객체
 */
export const getRecipientRollingPaperReactions = async (recipientId) => {
  try {
    const response = await teamApiClient.get(
      `/recipients/${recipientId}/reactions/`,
    );
    return response.data.results;
  } catch (error) {
    throw new Error('대상자의 리액션 목록을 불러오는데 실패했습니다');
  }
};

/**
 * 특정 수신자의 롤링페이퍼에 반응을 남김
 * @param {string} recipientId -  수신자의 ID
 * @returns {Promise} - 롤링페이퍼 메시지 정보를 포함하는 Promise 객체
 */
export const postRecipientRollingPaperReactions = async (recipientId, body) => {
  try {
    const response = await teamApiClient.post(
      `/recipients/${recipientId}/reactions/`,
      body,
    );
    return response.data;
  } catch (error) {
    throw new Error('대상자에게 리액션을 남기는데 실패했습니다');
  }
};
/*
 * 롤링페이퍼 수신자 생성
 * @param {string} name - 생성할 수신자의 이름
 * @param {string} backgroundColor - 생성할 수신자 롤링페이퍼 페이지 배경 색
 * @param {string} backgroundImageURL - 생성할 수신자 롤링페이퍼 페이지 배경 이미지
 * @returns {Promise} - 생성된 수신자 정보를 포함하는 Promise 객체
 */
export const postRecipient = async (
  name,
  backgroundColor,
  backgroundImageURL,
) => {
  try {
    const response = await teamApiClient.post('/recipients/', {
      team: '4-5',
      name: name,
      backgroundColor: backgroundColor,
      backgroundImageURL: backgroundImageURL,
    });
    return response.data;
  } catch (error) {
    throw new Error('롤링페이퍼 데이터를 생성하는데 실패했습니다');
  }
};

/**
 * 특정 수신자의 롤링페이퍼 메시지를 생성
 * @param {integer} recipientId - 생성할 수신자의 ID
 * @param {string} sender - 발신자 이름
 * @param {string} profileImageURL - 발신자의 프로필 이미지
 * @param {string} relationship - 발신자와 수신자의 관계
 * @param {string} content - 수신자에게 보낼 메세지 내용
 * @param {string} font - 생성할 롤링 페이퍼 메세지에 적용할 폰트
 * @returns {Promise} - 롤링페이퍼 메세지 정보를 포함하는 Promise 객체
 */
export const postRecipientRollingPaperMessage = async (
  recipientId,
  sender,
  profileImageURL,
  relationship,
  content,
  font,
) => {
  try {
    const response = await teamApiClient.post(
      `/recipients/${recipientId}/messages/`,
      {
        team: '4-5',
        recipientId: recipientId,
        sender: sender,
        profileImageURL: profileImageURL,
        relationship: relationship,
        content: content,
        font: font,
      },
    );
    return response.data;
  } catch (error) {
    throw new Error('대상자의 롤링페이퍼 메세지를 생성하는데 실패했습니다');
  }
};
