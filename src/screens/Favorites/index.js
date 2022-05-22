import {View, Text, Button,SafeAreaView} from 'react-native';
import React from 'react';
import { storage } from '../../utils/mmkvStorage';
import { useNavigation } from '@react-navigation/native';
const Favorites = () => {
  const navigation=useNavigation()
  const logout=()=>{
    storage.set('user.name', "")
    navigation.replace('LoginStack')
  }
  return (
    <SafeAreaView>
      <Text>Favorites</Text>
 <Button title='logout' onPress={logout}/> 
    </SafeAreaView>
  );
};

export default Favorites;
