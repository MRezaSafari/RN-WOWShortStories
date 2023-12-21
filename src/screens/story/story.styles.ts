import {StyleSheet} from 'react-native';
import StormwindTheme from '../../models/theme';

export const styles = (theme: typeof StormwindTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.black,
    },
    headerImage: {
      width: '100%',
      height: 400,
      objectFit: 'cover',
    },
    separator: {
      width: '150%',
      height: 15,
      objectFit: 'cover',
      marginTop: -5,
      zIndex: 20,
      marginLeft: '-25%',
    },
    backgroundImage: {
      flex: 1,
      marginTop: -10,
      padding: 10,
      zIndex: 10,
    },
    Title: {
      color: theme.colors.white,
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 10,
      bottom: 25,
      margin: 'auto',
      width: '100%',
      textAlign: 'center',
      position: 'absolute',
      zIndex: 10,
      fontFamily: theme.fonts.metamorphous.regular,
    },
    gradientBackground: {
      position: 'absolute',
      width: '100%',
      height: 100,
      bottom: 0,
      left: 0,
    },
    content: {
      fontSize: 17,
      lineHeight: 30,
      paddingBottom: 20,
      paddingTop: 10,
      zIndex: 40,
      position: 'relative',
      fontFamily: theme.fonts.openSans.regular,
    },
    backgroundImageSkin: {
      position: 'absolute',
      width: '100%',
      height: 400,
      bottom: 0,
      right: 0,
      zIndex: 1,
    },
    backgroundImageSkinTop: {
      position: 'absolute',
      width: '100%',
      height: 400,
      top: 0,
      left: 0,
      zIndex: 1,
      transform: [{rotate: '180deg'}],
    },
    backButtonContainer: {
      zIndex: 30,
    },
  });
