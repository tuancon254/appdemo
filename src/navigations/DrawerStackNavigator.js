import React from 'react';
import TestResultContainer from '../screens/TestResult/TestResultContainer';
import SignOut from '../screens/SignOut';
import HomeStackNavigator from './HomeStackNavigator';
import { createDrawerNavigator } from 'react-navigation-drawer';

const DrawerStackNavigator = createDrawerNavigator(
  {
    HomeStackNavigator: {
      screen: HomeStackNavigator,
      navigationOptions: {
        drawerLabel: 'Trang chủ',
      },
    },
    TestResultScreens: {
      screen: TestResultContainer,
      navigationOptions: {
        drawerLabel: 'Hồ sơ',
      },
    },
    SignOut: {
      screen: SignOut,
      navigationOptions: {
        drawerLabel: 'Đăng xuất',
      },
    },
  },
  {
    navigationOptions:{
      header:null
    },
    drawerPosition: "right",
    drawerType: "slide",
    drawerWidth:220,
    overlayColor:1,
  }
);

export default DrawerStackNavigator;
