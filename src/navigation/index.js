import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import FavoriteStack from './FavoriteStack';
import Icon from '../components/Icon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthStack from './AuthStack';
const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Tabnavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
         
        }}
       >
        <Tab.Screen
          name="Hometab"
          component={HomeStack}
          options={{tabBarBadge: 3, 
          }}
        />
        <Tab.Screen name="FavoriteStack" component={FavoriteStack} />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator
      initialRouteName="AuthStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={AuthStack} />
      <Stack.Screen name="HomeNav" component={Tabnavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
