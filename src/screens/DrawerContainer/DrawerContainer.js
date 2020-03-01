import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text
} from "@react-navigation/native"
import { DrawerNavigatorItems } from 'react-navigation-drawer';

function CustomDrawerContent(props) {
  return (
    <ScrollView>
      <View>
        <Text>Hello</Text>
        <DrawerNavigatorItems {...props}/>
      </View>
    </ScrollView>
  );
}
export default CustomDrawerContent;