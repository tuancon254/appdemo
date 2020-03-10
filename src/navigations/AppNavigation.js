import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TestResultScreens from '../screens/TestResult/TestResultScreens';
import SignOut from '../screens/SignOut';

const DrawerStack = createDrawerNavigator();

class AppNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerStack.Navigator
          drawerPosition="left"
          drawerType="slide"
          drawerStyle={{
            width: 215,
            color: 'white',
          }}
          backBehavior="initialRoute"
        >
          <DrawerStack.Screen name="Trang chủ" component={RootStackNavigator} />
          <DrawerStack.Screen name="Hồ sơ" component={TestResultScreens} />
          <DrawerStack.Screen name="Đăng xuất" component={SignOut} />
        </DrawerStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigation;
