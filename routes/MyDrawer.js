import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack, AboutStack } from "./MyStack";
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
