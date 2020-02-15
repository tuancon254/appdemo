import {
  createStackNavigation,
  createStackNavigator
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./RootStackNavigator";
import React from "react";

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="rootstack"
          component={RootStackNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
