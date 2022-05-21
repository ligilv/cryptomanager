import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon from '../../components/Icon';
// import {} from 'react-native-gesture-handler';
import {showMessage, hideMessage} from 'react-native-flash-message';
const CustomHeader = ({route, navigation, coinName, rank, thumbImage, changeColorPoint}) => {
  // const starColor=useRef('grey')
  const [starColor, setStarColor]=useState('grey')
  const addToFav=()=>{
    if (  starColor=='grey') {
      setStarColor('gold') 
      changeColorPoint('green')
      showMessage({
        message: 'Added to Favorites',
        type: 'success',
      } )
    }
    else{

    setStarColor('grey')
    changeColorPoint('red')
    showMessage({
      message: 'Removed from favorites',
      type: 'danger',
    } )
    }
  }
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
      <View style={{flexDirection: 'row', alignItems:'center'}}>
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
            // marginTop: 5,
            // width: 40,
            paddingHorizontal:3,
            borderRadius: 5,
           paddingVertical:1,
           height:20,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              textAlign: 'center',
              color: 'white',
              //   allowFontScaling: true,
            }}>
            #{rank}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={addToFav}>
        <Icon from={'fontAwesome'} name="star" color={starColor} size={25} />
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
