/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState, useRef} from 'react';
import FlashMessage from 'react-native-flash-message';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  AppState,
} from 'react-native';
import Home from './src/screens/Home';
import RootNavigator from './src/navigation';
import {storage} from './src/utils/mmkvStorage';
const App = () => {
  const appState = useRef(AppState.currentState);
  const username = storage.getString('user.name');
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  console.log('check', username);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });
    return () => {
      subscription.remove();
    };
  }, []);
  return (
    <Provider store={store}>
      <StatusBar
        translucent={false}
        // backgroundColor="transparent"
        barStyle={'default'}
      />
      <NavigationContainer>
        <RootNavigator style={{paddingTop: 20}} />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
