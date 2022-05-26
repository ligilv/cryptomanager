import {View, Text, Button, SafeAreaView, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {storage} from '../../utils/mmkvStorage';
import {useNavigation} from '@react-navigation/native';
import TestHook from '../../services/testHook';
import {useSelector} from 'react-redux';
const Favorites = () => {
  const state = useSelector(state => state.favorites.favoriteCoin);
  const navigation = useNavigation();
  const logout = () => {
    navigation.replace('LoginStack');
    storage.set('user.name', '');
    storage.set('user.type', '');
    const username = storage.getString('user.name');
    console.log('check', username);
  };
  const {count, addCount, resetTo} = TestHook();
  const list = useSelector(state => state.favorites);
  console.log('list', list);
  useEffect(() => {
    console.log(state);
  }, [state]);
  const testHook = () => {
    addCount();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Favorites</Text>
      <Button title="logout" onPress={logout} />
      <Button title="Hookdispatch" onPress={testHook} />
      <Button title="Reset" onPress={() => resetTo(0)} />
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <View
          style={{
            marginLeft: 50,
            backgroundColor: 'white',
            width: 200,
            height: 200,
            elevation: 10,
            shadowColor: 'red',
            shadowRadius: 55,
            borderRadius: 15,
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center', fontSize: 100}}>{count}</Text>
        </View>
      </View>
      {list.map((item, i) => {
        return <Text key={i}>{item.name}</Text>;
      })}
    </SafeAreaView>
  );
};

export default Favorites;
