import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import LoginForm from '../components/auth/LoginForm';
import UserData from '../components/auth/userData';
import useAuth from '../hooks/Auth';

const Account = () => {
  const { auth } = useAuth();

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
};

export default Account;
