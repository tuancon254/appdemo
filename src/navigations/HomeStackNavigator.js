import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import TestInfo from '../screens/TestInfo/index';
import SubjectContainer from '../screens/Subject/SubjectContainer';
import TestScreen from '../screens/TestScreen';

const HomeStackNavigator = createStackNavigator(
  {
    Home,
    SubjectContainer,
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
