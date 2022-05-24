import axios from 'axios';
import React, {useState, useEffect} from 'react';
const useCoinData = name => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    setIsloading(true);
    let mounted = true;
    const getCoindata = async coinName => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinName}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`,
        );
        if (mounted) {
          setData(response);
          setErrorMessage(null);
        }
      } catch (error) {
        setErrorMessage(error.message);
        setData([]);
      } finally {
        // setTimeout(() => {
        //   setIsloading(false);
        // }, 2000);
        mounted && setTimeout(() => setIsloading(false), 1000);
      }
    };
    getCoindata(name);
    const cleanup = () => {
      mounted = false;
      //   setIsloading(false);
    };
    return cleanup;
  }, [name]);
  return {data, isLoading, errorMessage};
};
export default useCoinData;
