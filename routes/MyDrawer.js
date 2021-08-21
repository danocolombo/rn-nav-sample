import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack, AboutStack } from "./MyStack";
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Application">
      <Drawer.Screen name="Application" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
