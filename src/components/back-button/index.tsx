import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native';
import styles from './back-button.styles';

interface Props extends React.ComponentProps<typeof TouchableOpacity> {
  overrideStyles?: any;
}

const BackButton: FC<Props> = ({overrideStyles, ...rest}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, overrideStyles]}
      {...rest}
      onPress={() => {
        navigation.goBack();
      }}>
      <Image
        source={require('../../assets/carousel-left-hover.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
