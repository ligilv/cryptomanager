import {View, Text, TextInput} from 'react-native';
import React from 'react';

const CustomInput = ({...rest}) => {
  return (
    <View style={{padding: 20}}>
      <TextInput
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          paddingHorizontal: 5,
        }}
        {...rest}
      />
    </View>
  );
};

export default CustomInput;
