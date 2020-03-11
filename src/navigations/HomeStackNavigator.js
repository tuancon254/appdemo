import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import HomeScreen from '../screens/Home/HomeScreen';

const HomeStack = createStackNavigator();

class HomeStackNavigator extends Component {
  render() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    );
  }
}

export default HomeStackNavigator;
