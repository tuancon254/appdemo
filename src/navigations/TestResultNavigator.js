import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View,Button } from 'react-native';
import HomeScreen from '../screens/Home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import TestResultScreens from '../screens/TestResult/TestResultScreens';
import BackButton from '../components/BackButton/BackButton';

const Stack = createStackNavigator();

function TestResultNavigator({navigation}) {
  return (

    <Stack.Navigator initialRouteName="TestResult">
      <Stack.Screen
        name="TestResult"
        component={TestResultScreens} />

      

    </Stack.Navigator>
  )
}

export default TestResultNavigator;