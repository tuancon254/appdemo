import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TestResultScreens from "../screens/TestResult/TestResultScreens"
import React from 'react';


const DrawerStack = createDrawerNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerStack.Navigator
        drawerPosition="left"
        drawerType="slide"
        drawerStyle={{
          width: 215,
          color: "white"
        }}
        backBehavior="initialRoute"
        >
        <DrawerStack.Screen name="Home" component={RootStackNavigator} />
        <DrawerStack.Screen name="Profile" component={TestResultScreens}  />
      </DrawerStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
