import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const DateBar = ({selectFun}) => {
  const [duration, setDuration] = useState([
    {value: '24h', selected: true},
    {value: '7d', selected: false},
    {value: '30d', selected: false},
    {value: '1y', selected: false},
    {value: 'All', selected: false},
  ]);

  const selected = toChange => {
    selectFun(toChange);

    // let updatedArr = duration.map(item => {
    //   if (toChange == item.value) {
    //     return {...item, selected: true};
    //   }
    //   return {...item, selected: false};
    // });
    // setDuration(updatedArr);
    let temp = [];
    for (let i = 0; i < duration.length; i++) {
      // console.log('name', duration[i]);
      if (duration[i].value == toChange) {
        temp.push({value: toChange, selected: true});
        // setDuration([...duration], {value: toChange, selected: true});
      } else {
        temp.push({value: duration[i].value, selected: false});
      }
      setDuration(temp);

      // console.log('final', duration);
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        // backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        // borderBottomColor: '#424445',
        // borderWidth: 1,>
      }}>
      {duration.map(item => {
        return (
          <TouchableOpacity
            key={item.value}
            style={{
              backgroundColor: '#292828',
              borderRadius: 5,
              paddingHorizontal: 5,
            }}
            onPress={() => selected(item.value)}>
            <Text style={{color: item.selected ? 'white' : 'grey'}}>
              {item.value}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DateBar;
