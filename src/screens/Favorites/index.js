import {View, Text, Button,SafeAreaView} from 'react-native';
import React from 'react';
import { storage } from '../../utils/mmkvStorage';
import { useNavigation } from '@react-navigation/native';
const Favorites = () => {
  const navigation=useNavigation()
  const logout=()=>{
    navigation.replace('LoginStack')
    storage.set('user.name', "")
    const username = storage.getString('user.name')
    console.log("check",username);
  }
  return (
    <SafeAreaView>
      <Text>Favorites</Text>
 <Button title='logout' onPress={logout}/> 
    </SafeAreaView>
  );
};

export default Favorites;
