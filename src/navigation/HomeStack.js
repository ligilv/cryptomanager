import {View, Text} from 'react-native';
import React from 'react';
// import {CoinDetail, Home} from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CoinDetail from '../screens/CoinDetail';
const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CoinDetail" component={CoinDetail} />
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
