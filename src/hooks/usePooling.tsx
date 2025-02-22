import { useEffect, useState } from 'react';

const usePooling = (url: string , options = {}, intervalTime = 60000) => {
  const [data, setData] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const [isFirstFetch, setIsFirstFetch] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
      setIsOnline(result.success);
    };

    if(isFirstFetch) {
      fetchData();
      setIsFirstFetch(false);
    }

    const interval = setInterval(fetchData, intervalTime);

    return () => clearInterval(interval);
  }, [url, options, intervalTime, isFirstFetch]);

  return { data, isOnline };
};

export default usePooling;
