import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';

const LoginStackNavigator = createStackNavigator(
  {
    Login,
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

export default LoginStackNavigator;
