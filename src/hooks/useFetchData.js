import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await apiFunction(...params);
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    /* eslint-disable react-hooks/exhaustive-deps */
    // 의도된 경고무시 - params 에대한 값들은 포함되지 않아야함(무한 호출 방지)
    // params의 값들에 대한 불필요한 재호출 방지를 위해 선택
  }, [apiFunction]);

  return { data, isLoading, error };
}

export default useFetchData;
