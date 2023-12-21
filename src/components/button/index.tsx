import React, {FC, ReactNode} from 'react';
import {TouchableOpacity, Text, ImageBackground} from 'react-native';
import {useTheme} from '@react-navigation/native';
import StormwindTheme from '../../models/theme';
import {styles as screenStyles} from './button.styles';

interface Props extends React.ComponentProps<typeof TouchableOpacity> {
  children: ReactNode;
}

const Button: FC<Props> = ({children, ...rest}) => {
  const theme = useTheme();
  const styles = screenStyles(theme as typeof StormwindTheme);

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/button-primary.png')}>
        <Text style={styles.text}>{children}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Button;
