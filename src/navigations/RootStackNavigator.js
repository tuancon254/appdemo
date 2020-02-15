import {
  createStackNavigation,
  createStackNavigator,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Login from './../screens/Login/Login';
import Home from './../screens/Home/HomeScreen';
import HomeScreen from './../screens/Home/HomeScreen';
import RecipeScreen from './../screens/Recipe/RecipeScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';

const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <RootStack.Screen name="RecipeScreen" component={RecipeScreen} />
      <RootStack.Screen
        name="IngredientsDetailsScreen"
        component={IngredientsDetailsScreen}
      />
      {/* <RootStack.Screen name="Login" component={Login}/>
            <RootStack.Screen name="Login" component={Login}/>
            <RootStack.Screen name="Login" component={Login}/>
            <RootStack.Screen name="Login" component={Login}/> */}
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
