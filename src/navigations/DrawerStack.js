import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './../screens/Home/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer"
import { NavigationContainer } from '@react-navigation/native';

const DrawerStack = createDrawerNavigator();

function DrawerStackNavigator(){
    return(
      <NavigationContainer>
      <DrawerStack.Navigator initialRouteName="HomeScreen">
        <DrawerStack.Screen name="HomeScreen" component={HomeScreen}/>
        <DrawerStack.Screen name="DrawerContainer" component={DrawerContainer}/>
      </DrawerStack.Navigator>
      </NavigationContainer>
    )
  }

  export default DrawerStackNavigator;