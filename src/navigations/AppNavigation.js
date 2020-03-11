import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class AppNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="RootStackNavigator"
            component={RootStackNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigation;
