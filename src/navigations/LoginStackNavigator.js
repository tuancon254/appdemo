import React from 'react';
import Login from './../screens/Login/Login';
import { createStackNavigator } from 'react-navigation-stack';

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
