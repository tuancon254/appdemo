import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login/Login/index';
import ForgotPassword from '../screens/Login/forgotPassword/forgotpassword'
import OTPcode from '../screens/Login/OTPcode/OTPcode'
import NewPassword from '../screens/Login/NewPassword/Newpassword'


const LoginStackNavigator = createStackNavigator(
  {
    Login,
    ForgotPassword,
    OTPcode,
    NewPassword
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

export default LoginStackNavigator;
