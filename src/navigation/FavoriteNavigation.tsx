import React from 'react';
import Favorite from '../screens/Favorite';
import ComicList from '../screens/ComicList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorite"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ComicList"
        component={ComicList}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="Favorite" component={Favorite} options={{ title: '', headerTransparent: true }} />
    </Stack.Navigator>
  );
};

export default FavoriteNavigation;
