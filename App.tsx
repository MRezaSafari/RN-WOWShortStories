import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import StoryScreen from './src/screens/story';
import StormwindTheme from './src/models/theme';
import StoriesScreen from './src/screens/stories';
import AboutScreen from './src/screens/about';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={StormwindTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          navigationKey="Home"
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Story"
          navigationKey="Story"
          component={StoryScreen}
          options={{
            title: '',
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Stories"
          navigationKey="Stories"
          component={StoriesScreen}
          options={{
            title: '',
            header: () => null,
          }}
        />
        <Stack.Screen
          name="About"
          navigationKey="About"
          component={AboutScreen}
          options={{
            title: '',
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
