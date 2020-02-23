import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './../screens/Login/Login';
import HomeScreen from './../screens/Home/HomeScreen';
import RecipeScreen from './../screens/Recipe/RecipeScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import TestList from "../screens/TestlistScreens/TestListScreens"
import MenuImage from "../components/MenuImage/MenuImage"
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer"
import TestResultScreens from "../screens/TestResult/TestResultScreens"
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
        options={{headerShown:false}}
      />
      <RootStack.Screen name="TestListScreens" component={TestList} />
      <RootStack.Screen name="RecipeScreen" component={RecipeScreen} />
      <RootStack.Screen
        name="IngredientsDetailsScreen"
        component={IngredientsDetailsScreen}
      />
    </RootStack.Navigator>
  );
}



export default RootStackNavigator;
