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
 * 롤링페이퍼 수신자 생성
 * @param {string} name - 생성할 수신자의 이름
 * @param {string} backgroundColor - 생성할 수신자 롤링페이퍼 페이지 배경 색
 * @param {string} backgroundImageURL - 생성할 수신자 롤링페이퍼 페이지 배경 이미지
 * @returns
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

export const getRecipients = async ({ limit, offset, isSortLike }) => {
  const query = `limit=${limit}&offset=${offset}&sort=${isSortLike}`;
  try {
    const response = await teamApiClient.get(`/recipients/?${query}`);
    return response.data.results;
  } catch (error) {
    throw new Error('롤링페이퍼 대상자를 불러오는데 실패했습니다');
  }
};
