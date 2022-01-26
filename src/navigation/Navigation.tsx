import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import FavoriteNavigation from './FavoriteNavigation';
import MarvelListNavigation from './MarvelListNavegation';
import AccountNavigation from './AccountNavigation';
import { Icon } from '@material-ui/core';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="MarvelList">
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: 'Favoritos',
          // tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name="MarvelList"
        component={MarvelListNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderIconMarvel(),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: 'Mi cuenta',
          // tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );

  function renderIconMarvel() {
    return <Image source={require('../assets/marvel.png')} style={{ width: 75, height: 75, top: -15 }} />;
  }
};

export default Navigation;
