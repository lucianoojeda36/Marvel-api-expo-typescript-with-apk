import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComicList from '../screens/ComicList';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const MarvelListNavigation = (props: any) => {
  // const {
  //   navigation,
  //   route: { params },
  // } = props;

  // useEffect(() => {
  //   navigation.setOptions({
  //     // headerRight: () => auth && <Favorite id={pokemon?.id} />,
  //     headerLeft: () => <Ionicons name="heart" size={32} />,
  //   });
  // }, [navigation, params]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ComicList"
        component={ComicList}
        options={{
          title: '',
          // headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MarvelListNavigation;
