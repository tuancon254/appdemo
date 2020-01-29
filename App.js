import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import HomeScreen from './src/screens/Home/HomeScreen';
import CategoriesScreen from './src/screens/Categories/CategoriesScreen';
import * as  firebase from 'firebase';
import {
  createAppContainer
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './src/screens/Splash/SplashScreen';

class FoodApp extends React.Component {

  data(){ 
    database = tra
  }
  render() {
    return <AppContainer />;

  }
}

export default FoodApp;
