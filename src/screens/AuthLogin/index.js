import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';
import {storage} from '../../utils/mmkvStorage';
const AuthLogin = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const addstore = () => {
    if (username) {
      storage.set('user.name', username);
      storage.set('user.type', 'registered');
      navigation.replace('HomeNav');
      showMessage({
        message: 'Logged in successfully',
        type: 'success',
      });
    } else {
      showMessage({
        message: 'Please enter username',
        type: 'danger',
      });
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.safereaView}>
          <Text style={styles.title}>$CRYPTO$</Text>
          <CustomInput
            placeholderTextColor={'#152029'}
            // autoCapitalize={'characters'}
            value={username}
            placeholder="Username"
            onChangeText={value => setUsername(value)}
            style={{height: 35}}
          />

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={addstore} style={styles.loginbutton}>
              <Text style={styles.logintext}>Login</Text>
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
                message: 'Hello Anonymous User',
                type: 'success',
              });
              storage.set('user.type', 'anonymous');
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AuthLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safereaView: {
    flex: 1,
    backgroundColor: '#152029',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: '900',
    color: '#aab1bd',
    textAlign: 'center',
  },
  loginbutton: {
    backgroundColor: '#3e79de',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  logintext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
