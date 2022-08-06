import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import FavoriteStack from './FavoriteStack';
import Icon from '../components/Icon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthStack from './AuthStack';
import {storage} from '../utils/mmkvStorage';
import {useSelector} from 'react-redux';
const RootNavigator = () => {
  const username = storage.getString('user.name');

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Tabnavigator = () => {
    const favCount = useSelector(state => state.favorites);

    return (
      <Tab.Navigator
        initialRouteName="Hometab"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#1B1A17',
          },
        }}>
        <Tab.Screen
          name="Hometab"
          component={HomeStack}
          options={{
            // tabBarBadge: 1,
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  from={'ionicons'}
                  name="home"
                  color={focused ? 'orange' : 'silver'}
                  size={30}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="FavoriteStack"
          component={FavoriteStack}
          options={{
            tabBarBadge: favCount.length,
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  from={'ionicons'}
                  name="star"
                  color={focused ? 'orange' : 'grey'}
                  size={30}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator
      initialRouteName={username == '' ? 'LoginStack' : 'HomeNav'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginStack" component={AuthStack} />
      <Stack.Screen name="HomeNav" component={Tabnavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
