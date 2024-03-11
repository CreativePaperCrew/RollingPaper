import { useState, useEffect, useCallback } from 'react';

/**
 * API 호출과 에러 처리를 위한 커스텀 훅
 * @param {Function} apiFunction API 호출을 수행할 함수
 * @param {Array} params apiFunction에 전달할 파라미터들의 배열
 * @returns {Object} 데이터, 로딩 상태, 에러 상태
 */
function useFetchData(apiFunction, params = []) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await apiFunction(...params);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [apiFunction, ...params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}

export default useFetchData;
