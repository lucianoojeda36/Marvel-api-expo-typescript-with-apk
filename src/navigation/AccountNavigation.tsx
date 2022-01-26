import React from 'react';
import Account from '../screens/Account';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Account" component={Account} options={{ title: '', headerTransparent: true }} />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
