import React from 'react';
import TestResultContainer from '../screens/TestResult/TestResultContainer';
import SignOut from '../screens/SignOut';
import HomeStackNavigator from './HomeStackNavigator';
import { createDrawerNavigator } from 'react-navigation-drawer';
import changePasswordStackNavigator from './changePasswordStackNavigator'
import CustomDrawerContent from '../screens/DrawerContainer/DrawerContainer';


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
    changePassword: {
      screen: changePasswordStackNavigator,
      navigationOptions: {
        drawerLabel: 'Đổi mật khẩu',
      },
    }
  },
  {
    navigationOptions: {
      header: null

    },
    drawerPosition: "right",
    drawerType: "slide",
    drawerWidth: 220,
    overlayColor: 1,
    contentComponent: CustomDrawerContent
  }

);



export default DrawerStackNavigator;
