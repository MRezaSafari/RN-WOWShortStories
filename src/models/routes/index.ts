import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Stories: undefined;
  Story: {id: number};
  About: undefined;
};

type PropsWithNavigation = NativeStackNavigationProp<RootStackParamList>;

export type {PropsWithNavigation};
