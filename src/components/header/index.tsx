import React, {FC} from 'react';
import {View} from 'react-native';
import {styles as screenStyles} from './header.styles';
import StormwindTheme from '../../models/theme';
import {useTheme} from '@react-navigation/native';
import BackButton from '../back-button';
import {Text} from '..';

interface Props {
  title: string;
}

const Header: FC<Props> = ({title}) => {
  const theme = useTheme();
  const styles = screenStyles(theme as typeof StormwindTheme);

  return (
    <View style={styles.container}>
      <BackButton style={{position: 'relative'}} />
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
