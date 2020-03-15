import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home/index';
import Subject from '../screens/Subject/Subject'
import TestInfo from '../screens/TestInfo/index';
import TestScreen from '../screens/TestScreen/TestScreen'

const HomeStackNavigator = createStackNavigator(
  {
    Home: Home,
    subject :Subject,
    testinfo:TestInfo,
    testscreen: TestScreen,
  },
  {
    navigationOptions: {
      headerMode: "none",
    },
  }
);

export default HomeStackNavigator;
