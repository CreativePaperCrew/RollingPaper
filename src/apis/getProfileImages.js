import apiClient from './apiConfig';

const getProfileImages = async () => {
  try {
    const response = await apiClient.get('/profile-images/');
    return response.data;
  } catch (error) {
    throw new Error('프로필 이미지를 불러올 수 없습니다.');
  }
};

export default getProfileImages;
