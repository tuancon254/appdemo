import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import DrawerStackNavigator from './DrawerStackNavigator';

const RootStackNavigator = createStackNavigator(
  {
    DrawerStackNavigator,
  },
  {}
);

export default RootStackNavigator;
