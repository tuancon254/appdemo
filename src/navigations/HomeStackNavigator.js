import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import TestInfo from '../screens/TestInfo/index';
import TestScreen from '../screens/TestScreen/TestScreen';
import SubjectContainer from '../screens/Subject/SubjectContainer';

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
