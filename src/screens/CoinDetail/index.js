import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from './header';
import {fetchCoinDetails} from '../../services/getCoinData';
import Graph from './graph';
import {addtofav} from '../../redux/actions/FavoritesActionCreator';
import {useNavigation} from '@react-navigation/native';
import useCoinData from '../../services/useCoinData';
const CoinDetail = ({route}) => {
  const navigation = useNavigation();
  const {name, rank, thumbImage, coinID, changePercent, currentPrice, symbol} =
    route.params;
  console.log('PARAMS', route.params);
  const [coinData, setCoinData] = useState({});
  const [loading, setLoading] = useState(false);
  const [colorPoint, setColorPoint] = useState('');
  // const fetchCoin = async () => {
  //   try {
  //     const data = await fetchCoinDetails(coinID);

  //     setCoinData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const changeColorPoint = color => {
  //   setColorPoint(color);
  // };
  // useEffect(() => {
  //   fetchCoin();
  // }, []);
  const {data, isLoading, errorMessage} = useCoinData(coinID);

  console.log('LOADINF', isLoading);
  const changeColorPoint = color => {
    setColorPoint(color);
  };
  useEffect(() => {
    setLoading(isLoading);
    setCoinData(data);
  }, [isLoading]);
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        navigation={navigation}
        coinName={symbol}
        rank={rank}
        thumbImage={thumbImage}
        changeColorPoint={changeColorPoint}
        coinId={coinID}
        name={name}
      />
      {loading ? (
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView style={styles.innerContainer}>
          {/* <Text>{coinData?.description?.en}</Text> */}
          {/* <Text>{changePercent}</Text>
        <Text>{currentPrice}</Text> */}
          <View style={styles.coinDetailContainer}>
            <View>
              <Text style={styles.coinName}>{coinID}</Text>
              <Text style={styles.price}>
                $
                {
                  currentPrice.toLocaleString('en-US', {
                    maximumFractionDigits: 2,
                  })
                  // item.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
              </Text>
            </View>
            <View
              style={[
                styles.percentage,
                {backgroundColor: changePercent < 0 ? 'red' : 'green'},
              ]}>
              <Text style={{fontWeight: '900', color: 'white'}}>
                {changePercent}%
              </Text>
            </View>
          </View>
          <Graph PointColor={colorPoint} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default CoinDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#152029',
  },
  loaderStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: '#152029',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  coinDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#192630',
    borderColor: '#424445',
    borderWidth: 1,
    borderRadius: 10,
  },
  coinName: {
    textTransform: 'capitalize',
    color: 'white',
  },
  price: {
    color: 'white',
    fontSize: 18,
  },
  percentage: {
    backgroundColor: 'green',
    justifyContent: 'center',
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});
