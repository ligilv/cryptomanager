import {View, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAllCoin} from '../../services/getAllCoins';
import RenderList from './renderList';
import Header from './Header';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {storage} from '../../utils/mmkvStorage';
const Home = () => {
  const state = useSelector(state => state);
  const navigation = useNavigation();
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(false);

  const getAllcoins = async () => {
    const ismounted = true;
    setRefresh(true);
    try {
      if (ismounted) {
        const data = await getAllCoin();
        setRefresh(false);
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
    const cleanup = () => {
      console.log('unmount');
      ismounted = false;
    };
    return cleanup;
  };

  useEffect(() => {
    getAllcoins();
    console.log('state', state);
  }, []);
  const username = storage.getString('user.name');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Header />
        <FlatList
          onRefresh={getAllcoins}
          refreshing={refresh}
          data={data}
          keyExtractor={item => item.market_cap_rank}
          renderItem={({item}) => {
            return <RenderList item={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#152029',
  },
  innerContainer: {
    backgroundColor: '#1B1A17',
    flex: 1,
  },
});
