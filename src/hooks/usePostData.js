import { useState } from 'react';

function usePostData(apiFunction, params = []) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePost = async (body) => {
    setIsLoading(true);
    try {
      const response = await apiFunction(...params, body);
      console.log(response);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handlePost, data, isLoading, error };
}

export default usePostData;
