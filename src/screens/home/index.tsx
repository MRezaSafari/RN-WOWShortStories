import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {styles as screenStyles} from './home.styles';
import {useNavigation, useTheme} from '@react-navigation/native';
import StormwindTheme from '../../models/theme';
import AnimatedSnow from '../../components/snow';
import {Button} from '../../components';
import {PropsWithNavigation} from '../../models';

const {width, height} = Dimensions.get('screen');

const HomeScreen = () => {
  const theme = useTheme();
  const styles = screenStyles(theme as typeof StormwindTheme, width, height);
  const navigation = useNavigation<PropsWithNavigation>();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/home-bg.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.snowContainer}>
          <AnimatedSnow />
        </View>
        <SafeAreaView>
          <Text style={styles.title}>World of warcraft{'\n'}Short Stories</Text>
        </SafeAreaView>
        <SafeAreaView>
          <View style={styles.buttonsContainer}>
            <Button
              onPress={() => {
                navigation.navigate('Stories');
              }}>
              Stories
            </Button>
            <Button
              onPress={() => {
                navigation.navigate('About');
              }}>
              About
            </Button>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
