import {StyleSheet} from 'react-native';
import StormwindTheme from '../../models/theme';

export const styles = (theme: typeof StormwindTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.black,
    },
    content: {
      padding: 20,
    },
  });
