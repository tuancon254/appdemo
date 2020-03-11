import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import Login from './../screens/Login/Login';
import SplashScreen from './../screens/Splash/SplashScreen';
import DrawerStackNavigator from './DrawerStackNavigator';

const RootStack = createStackNavigator();

class RootStackNavigator extends Component {
  render() {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <RootStack.Screen
          name="DrawerStackNavigator"
          component={DrawerStackNavigator}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </RootStack.Navigator>
    );
  }
}

export default RootStackNavigator;
