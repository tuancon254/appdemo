import React from 'react';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import TestListScreens from '../screens/TestlistScreens/TestListScreens';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';

const HomeStackNavigator = createStackNavigator(
  {
    Home,
    TestListScreens,
    RecipeScreen,
    IngredientsDetailsScreen,
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

export default HomeStackNavigator;
