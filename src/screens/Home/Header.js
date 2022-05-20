import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
// import {} from 'react-native-gesture-handler';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#152029',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        // borderBottomColor: '#424445',
        // borderWidth: 1,
      }}>
      <View style={{flexDirection: 'row'}}>
        {/* <Image
            style={{height: 30, width: 30}}
            source={{
              uri: thumbImage,
            }}
          /> */}
        <Text style={styles.headerText}>Coin Stats</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    paddingHorizontal: 10,
  },
});
