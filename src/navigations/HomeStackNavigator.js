import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import TestInfo from '../screens/TestInfo/index';
import SubjectContainer from '../screens/Subject/SubjectContainer';
import TestScreen from '../screens/TestScreen';
import TestResultScreens from '../screens/TestResult/TestResultScreens';
import SignOut from '../screens/SignOut'
import changePasswordStackNavigator from '../navigations/changePasswordStackNavigator'
import TestResultContainer from '../screens/TestResult/TestResultContainer';


const HomeStackNavigator = createStackNavigator(
  {
    Home,
    SubjectContainer,
    TestInfo,
    TestScreen,
    TestResultContainer,
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
