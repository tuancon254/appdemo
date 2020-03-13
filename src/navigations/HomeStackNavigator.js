import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import TestListScreens from '../screens/TestlistScreens/TestListScreens';
import { createStackNavigator } from 'react-navigation-stack';

const HomeStackNavigator = createStackNavigator(
  {
    HomeScreen,
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
