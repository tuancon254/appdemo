import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';

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
        <HomeStack.Screen name={'RecipeScreen'} component={RecipeScreen} />
        <HomeStack.Screen
          name={'IngredientsDetailsScreen'}
          component={IngredientsDetailsScreen}
        />
      </HomeStack.Navigator>
    );
  }
}

export default HomeStackNavigator;
