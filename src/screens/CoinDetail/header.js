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
import {useSelector, useDispatch} from 'react-redux';
import {addtofav, remFromFav} from '../../redux/actions/FavoritesActionCreator';
import {showMessage, hideMessage} from 'react-native-flash-message';
const CustomHeader = ({
  route,
  navigation,
  coinName,
  rank,
  thumbImage,
  changeColorPoint,
  coinId,
}) => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.favorites);
  const [isStarred, setStarred] = useState(false);
  useEffect(() => {
    if (list.length !== 0) {
      for (i of list) {
        if (i.name == coinId) {
          console.log('found', i.name, coinId);

          setStarred(true);
        } else {
          setStarred(false);
        }
      }
    }
  }, [list]);

  const addToFav = () => {
    if (isStarred) {
      setStarred(false);
      dispatch(remFromFav({name: coinId}));
    } else {
      setStarred(true);
      dispatch(addtofav({name: coinId}));
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#152029',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          from={'ionicons'}
          name="caret-back-sharp"
          color="white"
          size={30}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
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

            paddingHorizontal: 3,
            borderRadius: 5,
            paddingVertical: 1,
            height: 20,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              textAlign: 'center',
              color: 'white',
            }}>
            #{rank}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={addToFav}>
        <Icon
          from={'fontAwesome'}
          name="star"
          color={isStarred ? 'gold' : 'grey'}
          size={25}
        />
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
