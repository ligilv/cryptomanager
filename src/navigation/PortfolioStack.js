import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Portfolio from '../screens/Portfolio';

const PortfolioStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Portfolio"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Portfolio" component={Portfolio} />
    </Stack.Navigator>
  );
};

export default PortfolioStack;
