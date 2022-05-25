import React, {useEffect, useState} from 'react';
import axios from 'axios';
const useAllcoin = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setloading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  let mounted = true;
  const fetchData = async () => {
    setloading(true);
    console.log('called');

    try {
      if (mounted) {
        console.log('called');
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h',
        );
        setFetchedData(response.data);
        setErrorMessage(null);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setFetchedData([]);
    } finally {
      mounted &&
        setTimeout(() => {
          setloading(false);
        }, 0);
    }
  };
  const cleanup = () => {
    mounted = false;
  };
  useEffect(() => {
    fetchData();
    return cleanup;
  }, []);
  return {fetchData, fetchedData, isLoading, errorMessage};
};
export default useAllcoin;
