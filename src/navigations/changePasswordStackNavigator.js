import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import changePassword from '../screens/changePassword/changePassword/changePassword'
import NewPassword from '../screens/changePassword/NewPassword/Newpassword'

const changePasswordStackNavigator = createStackNavigator(
    {
        changePassword,
        NewPassword
    },
    {
        navigationOptions: {
          headerShown: false,
        },
      }
);

export default changePasswordStackNavigator;