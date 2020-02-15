import React, { Component } from "react";
import { Text, View } from "react-native";
import AppNavigation from "./navigations/AppNavigation";
import HomeScreen from "./screens/Home/HomeScreen";
import CategoriesScreen from "./screens/Categories/CategoriesScreen";
import * as firebase from "firebase";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from "./screens/Splash/SplashScreen";

const FoodApp = () => {
  return <AppNavigation />;
};

export default FoodApp;
