import React from 'react';
import {View, Dimensions} from 'react-native';
import Snow from './snow';

const {width, height} = Dimensions.get('screen');

const AnimatedSnow = () => {
  let snow = [];
  for (let i = 0; i < 40; i++) {
    snow.push(<Snow key={i} width={width} height={height} />);
  }

  return <View style={{zIndex: 10}}>{snow}</View>;
};

export default AnimatedSnow;
