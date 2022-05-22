import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,ToastAndroid,KeyboardAvoidingView, Keyboard
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import {showMessage, hideMessage} from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import { storage } from '../../utils/mmkvStorage';
const AuthLogin = () => {
  const navigation=useNavigation()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const addstore=()=>{
    if (username) {
      storage.set('user.name', username)
      navigation.replace('HomeNav');
      showMessage({
        message: 'Logged in successfully',
        type: 'success',
      } )
      
    } else {
      showMessage({
        message: 'Please enter username',
        type: 'danger',
      } ) 
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <SafeAreaView  style={{flex: 1, backgroundColor: '#152029', justifyContent: 'center'}}>


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
      placeholderTextColor={'#152029'}

        value={username}
        placeholder="Username"
        
        onChangeText={value => setUsername(value)}
style={{height:35}}
      />
      
      {/* <CustomInput
        value={password}
        placeholder="Password"
        onChangeText={value => setPassword(value)}
        style={{height:35}}></CustomInput> */}



       <View style={{alignItems: 'center'}}>
        <TouchableOpacity
        onPress={addstore}  
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
            message: 'Logged in successfully',
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
    </TouchableWithoutFeedback>
   
    </KeyboardAvoidingView>
  );
};

export default AuthLogin;

const styles = StyleSheet.create({
  container:{
    flex:1
  ,
  }
});
