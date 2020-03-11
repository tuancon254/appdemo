import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import Login from './../screens/Login/Login';
import SplashScreen from './../screens/Splash/SplashScreen';
import DrawerStackNavigator from './DrawerStackNavigator';
import firebase from '../services/FirebaseConfig';

const RootStack = createStackNavigator();

class RootStackNavigator extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: undefined,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <RootStack.Navigator>
        {isLoggedIn === undefined && (
          <RootStack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
        {isLoggedIn ? (
          <RootStack.Screen
            name="DrawerStackNavigator"
            component={DrawerStackNavigator}
            options={{ headerShown: false, gestureEnabled: false }}
          />
        ) : (
          <>
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
          </>
        )}
      </RootStack.Navigator>
    );
  }
}

export default RootStackNavigator;
