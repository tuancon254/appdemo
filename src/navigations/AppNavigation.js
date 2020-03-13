import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../screens/Splash/SplashScreen';
import RootStackNavigator from './RootStackNavigator';
import LoginStackNavigator from './LoginStackNavigator';

const AppNavigation = createSwitchNavigator(
  {
    SplashScreen,
    LoginStackNavigator,
    RootStackNavigator,
  },
  {}
);

export default AppNavigation;
