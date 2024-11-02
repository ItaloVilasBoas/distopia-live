import { useEffect, useState } from 'react';

const usePooling = (url: string , options = {}, intervalTime = 60000) => {
  const [data, setData] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
        setIsOnline(result.success);
        setError(null);
      } catch (err) {
        setError(err);
        setIsOnline(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, intervalTime);

    return () => clearInterval(interval);
  }, [url, options, intervalTime]);

  return { data, isOnline, error };
};

export default usePooling;
