import React from 'react';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import TestListScreens from '../screens/TestlistScreens/TestListScreens';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Recipe from '../screens/Recipe';

const HomeStackNavigator = createStackNavigator(
  {
    Home,
    TestListScreens,
    Recipe,
    IngredientsDetailsScreen,
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

export default HomeStackNavigator;
