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
const Home = ({navigation}) => {
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
  }, []);
  return (
    <SafeAreaView>
      <View style={{backgroundColor: '#1B1A17', paddingBottom: 90}}>
        <Header />
        <FlatList
          onRefresh={getAllcoins}
          refreshing={refresh}
          data={data}
          // onRefresh={() => console.log('refre')}
          keyExtractor={item => item.market_cap_rank}
          renderItem={({item}) => {
            return <RenderList item={item} navigation={navigation} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
