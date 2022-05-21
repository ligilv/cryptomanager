import {View, Text, ScrollView,SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from './header';
import {fetchCoinDetails} from '../../services/getCoinData';
import Graph from './graph';
import DateBar from './dateBar';
import {  } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
const CoinDetail = ({route}) => {
  const navigation=useNavigation()
  const {name, rank, thumbImage, coinID, changePercent, currentPrice, symbol} =
    route.params;
  const [coinData, setCoinData] = useState({});
  const [colorPoint, setColorPoint]=useState("")
  const fetchCoin = async () => {
    try {
      const data = await fetchCoinDetails(coinID);

      setCoinData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const changeColorPoint=(color)=>{
    setColorPoint(color)
  }
  useEffect(() => {
    fetchCoin();
  }, []);
  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: '#152029'}}>
      <CustomHeader
        navigation={navigation}
        coinName={symbol}
        rank={rank}
        thumbImage={thumbImage}
        changeColorPoint={changeColorPoint}
        />
      <ScrollView
        style={{
          backgroundColor: '#152029',
          paddingTop: 20,
          paddingHorizontal: 10,
        }}>
        {/* <Text>{coinData?.description?.en}</Text> */}
        {/* <Text>{changePercent}</Text>
        <Text>{currentPrice}</Text> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            backgroundColor: '#192630',
            borderColor: '#424445',
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <View>
            <Text style={{textTransform: 'capitalize', color: 'white'}}>
              {coinID}
            </Text>
            <Text style={{color: 'white', fontSize: 18}}>
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
            style={{
              backgroundColor: changePercent < 0 ? 'red' : 'green',
              justifyContent: 'center',
              height: 30,
              paddingHorizontal: 10,
              borderRadius: 8,
            }}>
            <Text style={{fontWeight: '900', color: 'white'}}>
              {changePercent}%
            </Text>
          </View>
        </View>
        <Graph PointColor={colorPoint}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoinDetail;
