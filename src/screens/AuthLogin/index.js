import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,ToastAndroid
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import {showMessage, hideMessage} from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
const AuthLogin = () => {
  const navigation=useNavigation()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#152029', justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 50,
          fontWeight: '900',
          color: '#aab1bd',
          textAlign: 'center',
        }}>
        $CRYPTO$
      </Text>
      <CustomInput
        value={username}
        placeholder="Username"
        onChangeText={value => setUsername(value)}
style={{height:35}}
      />
      <CustomInput
        value={password}
        placeholder="Password"
        onChangeText={value => setPassword(value)}
        style={{height:35}}
      />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#3e79de',
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity style={{marginTop: 15}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#aab1bd',
            fontSize: 20,
            fontWeight: '500',
          }}>
          Signup?
        </Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={{marginTop: 15}}
        onPress={() => {
           showMessage({
            message: 'Logged in',
            type: 'success',
          } )
          navigation.replace('HomeNav');
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#aab1bd',
            fontSize: 20,
            fontWeight: '500',
          }}>
          Continue without Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AuthLogin;

const styles = StyleSheet.create({});
