import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Subject from '../screens/Subject/Subject';
import TestInfo from '../screens/TestInfo/index';
import TestScreen from '../screens/TestScreen/TestScreen';

const HomeStackNavigator = createStackNavigator(
  {
    Home,
    Subject,
    TestInfo,
    TestScreen,
  },
  {
    navigationOptions: {
      headerShown: false,
    },
  }
);

export default HomeStackNavigator;
