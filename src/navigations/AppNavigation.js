import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import DrawerStackNavigator from "./TestResultNavigator";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer"
import TestResultScreens from "../screens/TestResult/TestResultScreens"
import React from 'react';

const Stack = createStackNavigator();
const DrawerStack = createDrawerNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      {/*<Stack.Navigator>
        <Stack.Screen
          name="RootStackNavigator"
          component={RootStackNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="DrawerStack"
          component={DrawerStackNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>*/}

      <DrawerStack.Navigator
        initialRouteName="HomeScreen"
        drawerPosition="left"
        drawerType="slide"
        drawerStyle={{
          width: 215,
          color: "white"
        }}>
        <DrawerStack.Screen name="Home" component={RootStackNavigator} />
        <DrawerStack.Screen name="DrawerContainer" component={DrawerContainer} />
        <DrawerStack.Screen name="TestResultScreens" component={TestResultScreens} backBehavior='initialRoute' />
      </DrawerStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
