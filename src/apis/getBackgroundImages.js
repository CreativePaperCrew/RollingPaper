import apiClient from './apiConfig';

const getBackgroundImages = async () => {
  try {
    const response = await apiClient.get('/background-images/');
    return response.data;
  } catch (error) {
    throw new Error('이미지를 불러올 수 없습니다.');
  }
};

export default getBackgroundImages;
