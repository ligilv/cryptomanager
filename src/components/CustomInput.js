import {View, Text, TextInput} from 'react-native';
import React from 'react';

const CustomInput = ({style, ...rest}) => {
  return (
    <View style={{padding: 20}}>
      <TextInput
        style={[{
          backgroundColor: 'white',
          borderRadius: 10,
          paddingHorizontal: 5,
        },style]}
        {...rest}
      />
    </View>
  );
};

export default CustomInput;
