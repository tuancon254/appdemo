import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import Login from './../screens/Login/Login';
import HomeScreen from './../screens/Home/HomeScreen';
import RecipeScreen from './../screens/Recipe/RecipeScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import TestList from '../screens/TestlistScreens/TestListScreens';
import Subject from '../screens/Subject/Subject'
const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Đăng nhập"
        component={Login}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <RootStack.Screen name="TestListScreens" options={{ title: '' }} component={TestList} />
      <RootStack.Screen name="RecipeScreen" options={{ title: '' }} component={RecipeScreen} />
      <RootStack.Screen
        name="IngredientsDetailsScreen"
        component={IngredientsDetailsScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Môn học" options={{title: ''}} component={Subject} />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
