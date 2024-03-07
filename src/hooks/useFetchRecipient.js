import { useState, useEffect } from 'react';
import { getRecipients } from '../apis/recipientRollingPaperApi';

const useRecipientData = (limit, offset, isSortLike) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getRecipients({ limit, offset, isSortLike });
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [limit, offset, isSortLike]);

  return { data, isLoading, error };
};

export default useRecipientData;
