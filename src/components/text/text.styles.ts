import {StyleSheet} from 'react-native';
import StormwindTheme from '../../models/theme';

export const styles = (theme: typeof StormwindTheme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.white,
      fontFamily: theme.fonts.openSans.regular,
    },
  });
