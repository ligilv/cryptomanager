import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorites from '../screens/Favorites';
const FavoriteStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Favorite" component={Favorites} />
    </Stack.Navigator>
  );
};

export default FavoriteStack;
