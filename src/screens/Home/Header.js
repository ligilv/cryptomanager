import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row'}}>
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
  headerContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#152029',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});
