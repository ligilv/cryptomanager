// import Icon from 'react-native-vector-icons/dist/AntDesign';
import {View, Text} from 'react-native';
import React from 'react';

import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Brands';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

const Icon = ({from, ...rest}) => {
  // console.log({...rest});
  switch (from) {
    case 'fontAwesome':
      // size={size} color="#900
      return <FontAwesome {...rest} />;
    case 'material':
      return <Material {...rest} />;
    case 'antDesign':
      return <AntDesign {...rest} />;
    case 'entypo':
      return <Entypo {...rest} />;

    case 'evilIcons':
      return <EvilIcons {...rest} />;
    case 'feather':
      return <Feather {...rest} />;
    case 'fontisto':
      return <Fontisto {...rest} />;
    case 'ionicons':
      return <Ionicons {...rest} />;
    case 'materialIcons':
      return <MaterialIcons {...rest} />;
    default:
      return <FontAwesome name={'question'} />;
  }
};

export default Icon;
