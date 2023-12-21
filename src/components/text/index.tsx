import React, {FC, ReactNode} from 'react';
import {Text} from 'react-native';

import {styles as componentStyles} from './text.styles';
import {useTheme} from '@react-navigation/native';
import StormwindTheme from '../../models/theme';

interface Props extends React.ComponentProps<typeof Text> {
  children: ReactNode;
}

const TextComponent: FC<Props> = ({children, style, ...rest}) => {
  const theme = useTheme();
  const styles = componentStyles(theme as typeof StormwindTheme);

  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

export default TextComponent;
