import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAllCoin} from '../../services/getAllCoins';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon from '../../components/Icon';
import RenderList from './renderList';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { storage } from '../../utils/mmkvStorage';
const Home = () => {
  const state=useSelector((state)=>state)
  const navigation=useNavigation()
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(false);
  const STYLES = ['default', 'dark-content', 'light-content'];
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[1]);
  const [hidden, setHidden] = useState(false);

  const getAllcoins = async () => {
    setRefresh(true);
    try {
      const data = await getAllCoin();
      setRefresh(false);
      setData(data);
    } catch (error) {
      console.log(error);
    }
    // console.log(data);
  };

  useEffect(() => {
    getAllcoins();
    // navigation.navigate('');
  console.log("state",state);
  }, []);
  const username = storage.getString('user.name') 
  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: '#152029',}}>
      <View style={{backgroundColor: '#1B1A17', flex:1}}>
      <Header />
      <FlatList
      onRefresh={getAllcoins}
      refreshing={refresh}
      data={data}
      // onRefresh={() => console.log('refre')}
      keyExtractor={item => item.market_cap_rank}
      renderItem={({item}) => { 
        return <RenderList item={item}/>;
      }}
      />
      </View>
    </SafeAreaView>
  );
};

export default Home;
