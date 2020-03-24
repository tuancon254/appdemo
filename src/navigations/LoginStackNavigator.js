import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import ForgotPassword from '../screens/forgotPassword/forgotpassword'

const LoginStackNavigator = createStackNavigator(
  {
    Login,
    ForgotPassword
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

export default LoginStackNavigator;
