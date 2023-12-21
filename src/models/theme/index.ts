import {DefaultTheme} from '@react-navigation/native';

const StormwindTheme = {
  ...DefaultTheme,
  dark: true,
  fonts: {
    metamorphous: {
      regular: 'Metamorphous',
    },
    openSans: {
      regular: 'OpenSans-Regular',
    },
  },
  colors: {
    ...DefaultTheme.colors,
    black: '#001011',
    white: '#FCFFF7',
    red: '#BC412B',
    blue: '#345995',
    purple: '#5D4A66',
    green: '#00916E',
  },
};

export default StormwindTheme;
