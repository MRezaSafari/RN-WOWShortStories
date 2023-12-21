import React, {FC} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {styles as screenStyles} from './story.styles';

import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import {Text} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../../components/back-button';
import {useTheme} from '@react-navigation/native';
import StormwindTheme from '../../models/theme';
import {StoriesData} from '../../models';

const IMG_HEIGHT = 400;

interface Props {
  route: {
    params: {
      id: string;
    };
  };
}

const StoryScreen: FC<Props> = ({route}) => {
  const {id} = route.params;

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const theme = useTheme();
  const styles = screenStyles(theme as typeof StormwindTheme);

  const story = StoriesData.find(story => story.id === +id);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value,
        [0, IMG_HEIGHT / 0.95],
        [1, 0.4],
      ),
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 1, 0, IMG_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [3, 1, 2],
          ),
        },
      ],
    };
  });

  const titleAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 3], [1, 0]),
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 1.5, 0, IMG_HEIGHT * 0.02],
          ),
        },
      ],
    };
  });

  const backButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 0.3], [1, 0.8]),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.backButtonContainer, backButtonAnimatedStyle]}>
        <BackButton />
      </Animated.View>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <View>
          <Animated.Image
            style={[styles.headerImage, imageAnimatedStyle]}
            source={story?.image}
          />

          <Animated.Text style={[styles.Title, titleAnimatedStyle]}>
            {story?.title}
          </Animated.Text>

          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.9)']}
            style={styles.gradientBackground}
          />
        </View>

        <View>
          <Image
            source={require('../../assets/Border_1.png')}
            style={styles.separator}
          />

          <ImageBackground
            source={require('../../assets/BGTexture_Seamless.jpg')}
            resizeMode="cover"
            style={styles.backgroundImage}>
            <ImageBackground
              resizeMode="cover"
              source={require('../../assets/footerbg.png')}
              style={styles.backgroundImageSkinTop}
            />
            <Text style={styles.content}>{story?.content}</Text>
            <ImageBackground
              resizeMode="cover"
              source={require('../../assets/footerbg.png')}
              style={styles.backgroundImageSkin}
            />
          </ImageBackground>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default StoryScreen;
