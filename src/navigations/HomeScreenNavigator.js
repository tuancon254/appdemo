import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './../screens/Home/HomeScreen';
import MenuImage from "../components/MenuImage/MenuImage"
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer"
import TestResultScreens from "../screens/TestResult/TestResultScreens"
import TestResultNavigator from './TestResultNavigator';

const Stack = createStackNavigator();

function HomeStackNavigator() {
    return(
<Stack.Navigator>
    <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
    />
    <Stack.Screen name="TestResultScreens" component={TestResultNavigator} options={{ headerShown: false }}/>

</Stack.Navigator>
)}

export default HomeStackNavigator;

