import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import TestInfo from '../screens/TestInfo/index';
import SubjectContainer from '../screens/Subject/SubjectContainer';
import TestScreen from '../screens/TestScreen';
import TestResultScreens from '../screens/TestResult/TestResultScreens';
import SignOut from '../screens/SignOut'
import changePasswordStackNavigator from '../navigations/changePasswordStackNavigator'


const HomeStackNavigator = createStackNavigator(
  {
    Home,
    SubjectContainer,
    TestInfo,
    TestScreen,
    TestResultScreens,
    SignOut,
    changePassword: changePasswordStackNavigator
  },
  {
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false
    },
  }
);

export default HomeStackNavigator;
