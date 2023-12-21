import {StyleSheet} from 'react-native';
import StormwindTheme from '../../models/theme';

export const styles = (
  theme: typeof StormwindTheme,
  width: number,
  height: number,
) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.black,
      flex: 1,
    },
    title: {
      color: theme.colors.white,
      fontFamily: theme.fonts.metamorphous.regular,
      fontSize: 35,
      textAlign: 'center',
      marginTop: 30,
      lineHeight: 70,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 100,
    },
    snowContainer: {
      width: width,
      height: height,
      backgroundColor: 'transparent',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    buttonsContainer: {
      justifyContent: 'center',
      position: 'relative',
      alignItems: 'center',
      gap: 20,
      marginTop: 20,
      zIndex: 200,
    },
  });
