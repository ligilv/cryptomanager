import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Icon from '../../components/Icon';
import {useNavigation} from '@react-navigation/native';
const RenderList = ({item}, props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('CoinDetail', {
            name: item.name,
            rank: item.market_cap_rank,
            thumbImage: item.image,
            coinID: item.id,
            changePercent: item.price_change_percentage_24h,
            currentPrice: item.current_price,
            symbol: item.symbol,
          })
        }>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.firstRow}>
          {/* it will have name, rank and shortname, drop percentage */}
          <Text style={[styles.textStyle]}>
            {item.name.length > 15
              ? item.name.substring(0, 15) + '...'
              : item.name}
          </Text>
          {/* rank */}
          <View style={{flexDirection: 'row'}}>
            <View style={styles.rankView}>
              <Text style={styles.rankText}>#{item.market_cap_rank}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 5,
              }}>
              {item.price_change_percentage_24h < 0 ? (
                <Icon
                  from={'antDesign'}
                  name="caretdown"
                  size={15}
                  color="red"
                  style={{paddingHorizontal: 5}}
                />
              ) : (
                <Icon
                  from={'antDesign'}
                  name="caretup"
                  size={15}
                  color="green"
                  style={{paddingHorizontal: 10}}
                />
              )}
              <Text style={{color: 'white', paddingHorizontal: 5}}>
                {item.price_change_percentage_24h}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={{color: 'white', fontSize: 18}}>
            $
            {item.current_price.toLocaleString('en-US', {
              maximumFractionDigits: 2,
            })}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              marginTop: 10,
              fontWeight: '700',
            }}>
            Mcap {''} {Math.abs(Number(item.market_cap) / 1.0e9).toFixed(2)} B
          </Text>
        </View>
        {/* this view will have rate and mcap */}
      </TouchableOpacity>
    </View>
  );
};

export default RenderList;
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 22,
  },
  card: {
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#192630',
    borderRadius: 15,
    flex: 1,
    padding: 20,
  },
  image: {
    height: 50,
    width: 50,
  },
  firstRow: {flexDirection: 'column', marginLeft: 20},
  rankView: {
    backgroundColor: 'grey',
    marginTop: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  rankText: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});
