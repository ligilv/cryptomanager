import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from '../../components/Icon';
// import {} from 'react-native-gesture-handler';

const CustomHeader = ({route, navigation, coinName, rank, thumbImage}) => {
  console.log(coinName);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#152029',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        // borderBottomColor: '#424445',
        // borderWidth: 1,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          from={'ionicons'}
          name="caret-back-sharp"
          color="white"
          size={30}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 30, width: 30}}
          source={{
            uri: thumbImage,
          }}
        />
        <Text style={styles.headerText}>{coinName}</Text>
        <View
          style={{
            backgroundColor: 'grey',
            marginTop: 5,
            width: 40,
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              textAlign: 'center',
              color: 'white',
              //   allowFontScaling: true,
            }}>
            #{rank}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Icon from={'fontAwesome'} name="star" color="yellow" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    paddingHorizontal: 10,
  },
});
