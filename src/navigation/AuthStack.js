import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthLogin from '../screens/AuthLogin'
const AuthStack = () => {
    const Stack=createNativeStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName="AuthLogin"
      screenOptions={{
        headerShown: false,
      }}>
          <Stack.Screen name='AuthLogin' component={AuthLogin}/>

    </Stack.Navigator>
  )
}

export default AuthStack