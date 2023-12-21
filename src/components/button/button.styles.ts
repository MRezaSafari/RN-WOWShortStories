import {StyleSheet} from 'react-native';
import StormwindTheme from '../../models/theme';

export const styles = (theme: typeof StormwindTheme) =>
  StyleSheet.create({
    container: {},
    backgroundImage: {
      width: 200,
      height: 50,
      objectFit: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: theme.colors.white,
      fontFamily: theme.fonts.metamorphous.regular,
      fontSize: 18,
    },
  });
