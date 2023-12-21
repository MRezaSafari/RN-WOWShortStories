import {StyleSheet} from 'react-native';
import StormwindTheme from '../../models/theme';

export const styles = (theme: typeof StormwindTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.black,
      padding: 15,
    },
    borderImage: {
      width: '100%',
      height: 200,
      objectFit: 'contain',
    },
    cardImage: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      zIndex: -1,
    },
    footer: {
      borderBottomWidth: 3,
      borderBottomColor: '#d88831',

      borderLeftWidth: 3,
      borderLeftColor: '#d88831',

      borderRightWidth: 3,
      borderRightColor: '#d88831',
      padding: 10,
      marginTop: -1,
    },
    title: {
      fontSize: 15,
      fontFamily: theme.fonts.metamorphous.regular,
    },
  });
