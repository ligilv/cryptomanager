import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import FavoriteStack from './FavoriteStack';
import Icon from '../components/Icon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthStack from './AuthStack'
const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={AuthStack} />
      {/* <Stack.Screen name="FavoriteStack" component={FavoriteStack} /> */}
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>

    // <Tab.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //     tabBarActiveTintColor: 'tomato',
    //     tabBarInactiveTintColor: 'gray',
    //   }}>
    //   <Tab.Screen
    //     name="Home"
    //     component={HomeStack}
    //     options={{tabBarBadge: 3}}
    //   />
    //   <Tab.Screen name="FavoriteStack" component={FavoriteStack} />
    // </Tab.Navigator>
  );
};

export default RootNavigator;
