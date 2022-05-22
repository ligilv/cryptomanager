/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import FlashMessage from 'react-native-flash-message';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/screens/Home';
import RootNavigator from './src/navigation';
import { storage } from './src/utils/mmkvStorage';
const App = () => {
  const username = storage.getString('user.name')
  console.log("check",username); 
  return (
    <Provider store={store}>
    <NavigationContainer>
    <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle={'default'}
          />
    <RootNavigator />
    <FlashMessage position="top" /> 
    </NavigationContainer>
    </Provider>
  );
};

export default App;
