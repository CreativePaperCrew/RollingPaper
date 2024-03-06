import { useState } from 'react';

function usePostData(apiFunction, params = []) {
  const [res, setRes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePost = async (body) => {
    setIsLoading(true);
    try {
      const response = await apiFunction(...params, body);
      setRes(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handlePost, res, isLoading, error };
}

export default usePostData;
