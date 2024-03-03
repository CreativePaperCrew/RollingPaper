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
    return response.data;
  } catch (error) {
    throw new Error('대상자의 리액션 목록을 불러오는데 실패했습니다');
  }
};

/**
 * 특정 수신자의 롤링페이퍼에 반응을 남김
 * @param {string} recipientId -  수신자의 ID
 * @returns {Promise} - 롤링페이퍼 메시지 정보를 포함하는 Promise 객체
 */
export const postRecipientRollingPaperReactions = async (
  recipientId,
  emoji,
) => {
  try {
    const response = await teamApiClient.post(
      `/recipients/${recipientId}/reactions/`,
      {
        emoji: emoji,
        type: 'increase',
      },
    );
    return response.data;
  } catch (error) {
    throw new Error('대상자에게 리액션을 남기는데 실패했습니다');
  }
};
