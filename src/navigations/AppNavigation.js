import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import DrawerStackNavigator from "./DrawerStack";
import React from 'react';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="RootStackNavigator"
          component={RootStackNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="DrawerStack"
          component={DrawerStackNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
