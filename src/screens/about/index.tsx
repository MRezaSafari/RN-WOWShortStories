import React from 'react';
import {View} from 'react-native';
import {Text} from '../../components';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import StormwindTheme from '../../models/theme';
import {styles as screenStyles} from './about.styles';

const AboutScreen = () => {
  const theme = useTheme();
  const styles = screenStyles(theme as typeof StormwindTheme);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header title="About" />
        <View style={styles.content}>
          <Text>
            Hello! 🙂{'\n'}
            {'\n'}I'm Lukas (Reza) Safari, a passionate full-stack developer.
            {'\n'}
            {'\n'}
            This project is a product of both fun and a commitment to keeping my
            skills sharp, particularly in React Native and its evolving
            landscape.
            {'\n'}
            {'\n'}I genuinely hope you find this project engaging and
            insightful!
            {'\n'}
            {'\n'}Connect with me:
            {'\n'}
            {'\n'}GitHub: @MRezaSafari
            {'\n'}Twitter: @RezaVerse
            {'\n'}LinkedIn: @RezaVerse
            {'\n'}
            {'\n'}Content Disclaimer:
            {'\n'}Please note that while the stories and images here are
            AI-generated and carefully reviewed by me, the lore, names, and all
            elements related to the World of Warcraft universe remain the
            property of Blizzard Entertainment. This project is a creative
            endeavor, not affiliated with or endorsed by Blizzard Entertainment.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AboutScreen;
