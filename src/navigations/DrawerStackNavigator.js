import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TestResultScreens from '../screens/TestResult/TestResultScreens';
import SignOut from '../screens/SignOut';
import HomeStackNavigator from './HomeStackNavigator';

const DrawerStack = createDrawerNavigator();

class DrawerStackNavigator extends Component {
  render() {
    return (
      <DrawerStack.Navigator
        drawerPosition="left"
        drawerType="slide"
        drawerStyle={{
          width: 215,
          color: 'white',
        }}
        backBehavior="initialRoute"
      >
        <DrawerStack.Screen name="Trang chủ" component={HomeStackNavigator} />
        <DrawerStack.Screen name="Hồ sơ" component={TestResultScreens} />
        <DrawerStack.Screen name="Đăng xuất" component={SignOut} />
      </DrawerStack.Navigator>
    );
  }
}

export default DrawerStackNavigator;
