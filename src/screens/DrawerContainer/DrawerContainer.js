import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

function CustomDrawerContent(props) {
  return (
    <ScrollView>
      <Text>Hello</Text>
      <DrawerNavigatorItems {...props} />
    </ScrollView>
  );
}
export default CustomDrawerContent;
