import {StyleSheet} from 'react-native';
import StormwindTheme from '../../models/theme';

export const styles = (theme: typeof StormwindTheme) =>
  StyleSheet.create({
    container: {
      height: 70,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
    },
    title: {
      fontSize: 16,
      fontFamily: theme.fonts.metamorphous.regular,
      color: theme.colors.white,
    },
  });
