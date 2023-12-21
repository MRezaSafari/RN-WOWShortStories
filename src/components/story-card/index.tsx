import React, {FC} from 'react';
import {styles as screenStyles} from './story-card.styles';

import {useTheme} from '@react-navigation/native';
import StormwindTheme from '../../models/theme';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native';
import {Text} from '..';
import {IStory} from '../../models';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  story: IStory;
  onPress?: () => void;
  viewableItems: SharedValue<ViewToken[]>;
}

const StoryCard: FC<Props> = React.memo(({story, viewableItems, onPress}) => {
  const theme = useTheme();
  const styles = screenStyles(theme as typeof StormwindTheme);

  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(item => item.isViewable)
        .find(viewableItem => viewableItem.item.id === story.id),
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);

  return (
    <Animated.View style={[rStyle]}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <ImageBackground
          source={require('../../assets/Card_Border.png')}
          style={styles.borderImage}
          resizeMode="stretch">
          <Image source={story.image} style={styles.cardImage} />
        </ImageBackground>
        <View style={styles.footer}>
          <Text style={styles.title}>{story.title}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
});

export default StoryCard;
