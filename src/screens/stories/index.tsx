import React from 'react';
import {styles as screenStyles} from './stories.styles';

import {useNavigation, useTheme} from '@react-navigation/native';
import StormwindTheme from '../../models/theme';
import {FlatList, SafeAreaView, View, ViewToken} from 'react-native';
import StoryCard from '../../components/story-card';
import {PropsWithNavigation, StoriesData} from '../../models';
import Header from '../../components/header';
import {useSharedValue} from 'react-native-reanimated';

const StoriesScreen = () => {
  const theme = useTheme();
  const styles = screenStyles(theme as typeof StormwindTheme);
  const navigation = useNavigation<PropsWithNavigation>();

  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header title="Stories" />
        <FlatList
          data={StoriesData}
          contentContainerStyle={{paddingBottom: 100}}
          onViewableItemsChanged={({viewableItems: vItems}) => {
            viewableItems.value = vItems;
          }}
          renderItem={({item}) => (
            <StoryCard
              story={item}
              viewableItems={viewableItems}
              onPress={() => navigation.navigate('Story', {id: item.id})}
            />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default StoriesScreen;
