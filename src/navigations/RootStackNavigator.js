import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import SplashScreen from './../screens/Splash/SplashScreen';
import DrawerStackNavigator from './DrawerStackNavigator';
import SignOut from '../screens/SignOut';
import LoginStackNavigator from './LoginStackNavigator';

const RootStack = createStackNavigator();

class RootStackNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="LoginStackNavigator"
          component={LoginStackNavigator}
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
        <RootStack.Screen name="SignOut" component={SignOut} />
      </RootStack.Navigator>
    );
  }
}

export default RootStackNavigator;
