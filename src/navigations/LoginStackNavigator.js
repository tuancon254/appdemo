import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import Login from './../screens/Login/Login';

const LoginStack = createStackNavigator();

class LoginStackNavigator extends Component {
  render() {
    return (
      <LoginStack.Navigator>
        <LoginStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </LoginStack.Navigator>
    );
  }
}

export default LoginStackNavigator;
